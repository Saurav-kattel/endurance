import {
  Box,
  Container,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ApiData {
  status: string;
  client: string;
  type: string;
  ro_number: string;
  claim_number: string;
  assigned_to: string;
  time: string;
  date: string;
  amount: string;
}

export default function ClaimsData({
  selectedFilter,
}: {
  selectedFilter: string;
}) {
  const [data, setData] = useState<ApiData[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("../../../exampledata.json");
        const resData = await response.json();
        setData(resData);
        console.log(data);
      } catch (err: any) {
        console.error(err);
      }
    }
    getData();
  }, [selectedFilter]);
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
        <TableTbody className="[&>tr>td]:p-2">
          {data &&
            data.map((claim) => {
              return (
                <TableTr
                  onClick={() => {
                    navigate(`/claims/${claim.claim_number}`);
                  }}
                  key={claim.ro_number}
                  className="m-2 py-4 border-b-[1px] border-b-gray-100 cursor-pointer hover:bg-gray-100 hover:opacity-60"
                >
                  <TableTd>
                    <div className="text-center capitalize font-semibold flex justify-start items-center gap-2 px-3">
                      <div
                        className={`w-[10px] h-[10px] rounded-full ${claim.status === "pending" ? "bg-yellow-500" : claim.status === "authorized" ? "bg-emerald-700" : "bg-red-700"}`}
                      ></div>
                      {claim.status}
                    </div>
                  </TableTd>

                  <TableTd className="text-center capitalize font-semibold flex justify-center items-center gap-2">
                    <Box className="w-[40px] h-[40px] rounded-full bg-slate-100 p-2 text-xl text-gray-500 text-center">
                      {claim.client.split(" ").length > 1
                        ? claim.client
                            .split(" ")[0]
                            .charAt(0)
                            .toUpperCase()
                            .concat(
                              claim.client
                                .split(" ")[1]
                                .charAt(0)
                                .toUpperCase(),
                            )
                        : claim.client.split(" ")[0].charAt(0).toUpperCase()}
                    </Box>

                    {claim.client}
                  </TableTd>
                  <TableTd className="text-center capitalize font-semibold">
                    {claim.assigned_to}
                  </TableTd>
                  <TableTd className="text-center capitalize font-semibold">
                    {claim.date}
                  </TableTd>
                  <TableTd className="text-center capitalize font-semibold">
                    {claim.time}
                  </TableTd>
                  <TableTd className="text-center capitalize font-semibold">
                    {claim.ro_number}
                  </TableTd>
                  <TableTd className="text-center capitalize font-semibold">
                    {claim.claim_number}
                  </TableTd>
                  <TableTd className="text-center">{claim.amount}</TableTd>
                </TableTr>
              );
            })}
        </TableTbody>
      </Table>
    </Container>
  );
}
