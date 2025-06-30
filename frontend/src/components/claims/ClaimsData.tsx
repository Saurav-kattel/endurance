import { Container, Table, TableTh, TableThead, TableTr } from "@mantine/core";

export default function ClaimsData({
  selectedFilter,
}: {
  selectedFilter: string;
}) {
  return (
    <Container>
      <Table className="text-[0.7rem] box-border w-full m-1 p-1">
        <TableThead>
          <TableTr className="text-gray-700 uppercase">
            <TableTh>Status</TableTh>
            <TableTh>Client</TableTh>
            <TableTh>Assigned To</TableTh>
            <TableTh>Date</TableTh>
            <TableTh>Time</TableTh>
            <TableTh>Ro</TableTh>
            <TableTh>Claim Number</TableTh>
            <TableTh>Amount</TableTh>
          </TableTr>
        </TableThead>
      </Table>
    </Container>
  );
}
