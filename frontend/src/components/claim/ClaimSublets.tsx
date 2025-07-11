import {
  Box,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { forwardRef, useEffect, useState } from "react";
import type { SubletData } from "./Claim";

const SubletHeader = ({ subletData }: { subletData: SubletData[] }) => {
  const [totalAmount] = useState(
    subletData.reduce((acc, next) => {
      return (acc += next.cost_per * next.quantity);
    }, 0),
  );
  return (
    <header className="flex justify-start items-center gap-2">
      <Text className="text-[0.8rem] font-semibold">Sublets</Text>
      <Text className="text-[0.8rem] font-semibold text-gray-400">
        ${totalAmount}
      </Text>
    </header>
  );
};

const SubletData = ({ data }: { data: SubletData[] }) => {
  return (
    <Box className="w-full p-4 border border-gray-300 rounded-xl mt-5">
      <Table className=" w-full">
        <TableThead>
          <TableTr>
            <TableTh className="text-left text-gray-500 text-[0.8rem] uppercase">
              Name of the sublet
            </TableTh>
            <TableTh className="text-left text-gray-500 text-[0.8rem] uppercase">
              Qty
            </TableTh>
            <TableTh className="text-left text-gray-500 text-[0.8rem] uppercase">
              Cost Per
            </TableTh>
            <TableTh className="text-left text-gray-500 text-[0.8rem] uppercase">
              Requested
            </TableTh>
          </TableTr>
        </TableThead>

        <TableTbody className="[&>tr>td]:p-4">
          {data.map((sublet) => {
            return (
              <TableTr
                className="border-y-[1px]  border-gray-100"
                key={sublet.name}
              >
                <TableTd className="text-[0.8rem]">{sublet.name}</TableTd>
                <TableTd className="text-[0.8rem]">{sublet.quantity}</TableTd>
                <TableTd className="text-[0.8rem]">${sublet.cost_per}</TableTd>
                <TableTd className="text-[0.8rem]">
                  ${sublet.quantity * sublet.cost_per}
                </TableTd>
              </TableTr>
            );
          })}
        </TableTbody>
      </Table>
    </Box>
  );
};

const ClaimSublets = forwardRef<
  HTMLDivElement,
  {
    subletData: SubletData[];
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  }
>((props, ref) => {
  useEffect(() => {
    props.setActiveSection("sublet");
  }, []);
  return (
    <Box ref={ref} id="sublet" className="h-auto lg:h-[50dvh]  w-[80%] p-4">
      {props.subletData && <SubletHeader subletData={props.subletData} />}
      {props.subletData && <SubletData data={props.subletData} />}
    </Box>
  );
});

export default ClaimSublets;
