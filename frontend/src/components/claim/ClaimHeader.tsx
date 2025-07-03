import {
  Box,
  Container,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import type { ApiData } from "./ClaimsData";
import { MdOutlineChevronRight } from "react-icons/md";
import { PiLayoutThin } from "react-icons/pi";

export default function ClaimHeader({
  claimData,
}: {
  claimData: ApiData | undefined;
}) {
  return (
    <Container className="w-[80%] px-1 py-4 flex justify-center items-start flex-col">
      <Box className="flex justify-center items-center p-4  gap-1 text-[0.8rem] text-gray-400">
        <PiLayoutThin size={20} />
        <Text>Claims</Text>
        <MdOutlineChevronRight size={20} />
        <Text>Action Needed</Text>
      </Box>

      <Box>
        <Text className="text-2xl font-bold p-4">
          {claimData?.claim_number}
        </Text>
      </Box>

      <Box className="w-full overflow-x-auto p-4">
        <Table className="min-w-[600px] w-full">
          <TableThead>
            <TableTr>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Type
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Ro Number
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Date
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Client
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Assigned To
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-2 whitespace-nowrap">
                Current ODO
              </TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd className="p-2 whitespace-nowrap">
                {claimData?.type}
              </TableTd>
              <TableTd className="p-2 whitespace-nowrap">
                {claimData?.ro_number}
              </TableTd>
              <TableTd className="p-2 whitespace-nowrap">
                {claimData?.date}
              </TableTd>
              <TableTd className="p-2 whitespace-nowrap">
                {claimData?.client}
              </TableTd>
              <TableTd className="p-2 whitespace-nowrap">
                {claimData?.assigned_to}
              </TableTd>
              <TableTd className="p-2 whitespace-nowrap"></TableTd>
            </TableTr>
          </TableTbody>
        </Table>
      </Box>
    </Container>
  );
}
