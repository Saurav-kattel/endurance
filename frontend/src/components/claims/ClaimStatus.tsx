import {
  Box,
  Button,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import type { ApiData } from "./ClaimsData";

export default function ClaimStatus({
  claimData,
}: {
  claimData: ApiData | undefined;
}) {
  return (
    <Box className="w-full lg:w-[78%] p-4 rounded-xl border border-gray-300 overflow-x-auto">
      {/* Horizontal scroll wrapper */}
      <Table className="min-w-[700px] w-full border-collapse py-2 border-spacing-4">
        <TableThead>
          <TableTr>
            <TableTh className="uppercase text-[0.8rem] text-gray-500 text-left whitespace-nowrap">
              Status
            </TableTh>
            <TableTh className="uppercase text-[0.8rem] text-gray-500 text-left whitespace-nowrap">
              Details
            </TableTh>
            <TableTh className="uppercase text-[0.8rem] text-gray-500 text-left whitespace-nowrap">
              Additional Actions
            </TableTh>
          </TableTr>
        </TableThead>

        <TableTbody className="[&>tr>td]:p-2">
          <TableTr className="border-b-[1px] border-b-gray-100">
            <TableTd>
              <div className="text-center capitalize font-semibold flex justify-start items-center gap-2">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    claimData?.status === "pending"
                      ? "bg-yellow-500"
                      : claimData?.status === "authorized"
                        ? "bg-emerald-700"
                        : "bg-red-700"
                  }`}
                ></div>
                <Text className="text-[0.8rem] capitalize">
                  {claimData?.status}
                </Text>
              </div>
            </TableTd>

            <TableTd className="flex text-gray-500 text-[0.8rem] items-center gap-1 whitespace-nowrap">
              <Text>${claimData?.amount}</Text>
              <Text>.</Text>
              <Text>{claimData?.date}</Text>
              <Text>.</Text>
              <Text>{claimData?.time}</Text>
            </TableTd>

            <TableTd>
              {claimData?.status === "authorized" && (
                <Button className="px-5 bg-black text-white py-1 rounded-2xl text-[0.75rem]">
                  Submit for payment
                </Button>
              )}
              {claimData?.status === "pending" && (
                <Box className="text-[0.75rem] flex items-center gap-2">
                  <Text className="text-gray-500">Approx to approval:</Text>
                  <Text>1 business day</Text>
                </Box>
              )}
            </TableTd>
          </TableTr>
        </TableTbody>
      </Table>
    </Box>
  );
}
