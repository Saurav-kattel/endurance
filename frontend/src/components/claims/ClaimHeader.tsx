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

export default function ClaimHeader({
  claimData,
}: {
  claimData: ApiData | undefined;
}) {
  return (
    <Container className="w-full flex justify-center items-center flex-col">
      <Box className="w-[90%] p-4">
        <Text className="text-2xl font-bold p-4">
          {claimData?.claim_number}
        </Text>
      </Box>
      <Box className="w-[90%] p-5">
        <Table className="w-[90%]">
          <TableThead>
            <TableTr>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Type
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Ro Number
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Date
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Client
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Assigned To
              </TableTh>
              <TableTh className="text-left text-[0.8rem] text-gray-400 uppercase p-1">
                Current ODO
              </TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>
            <TableTr>
              <TableTd>{claimData?.type}</TableTd>
              <TableTd>{claimData?.ro_number}</TableTd>
              <TableTd>{claimData?.date}</TableTd>
              <TableTd>{claimData?.client}</TableTd>
              <TableTd>{claimData?.assigned_to}</TableTd>
            </TableTr>
          </TableTbody>
        </Table>
      </Box>
    </Container>
  );
}
