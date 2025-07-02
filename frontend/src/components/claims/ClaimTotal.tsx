import { forwardRef, useEffect, useState } from "react";
import type { JobData, SubletData } from "./Claim";
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

type PropType = {
  serviceData: JobData[];
  subletData: SubletData[];
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const ClaimTotal = forwardRef<HTMLDivElement, PropType>((props, ref) => {
  const [totals, setTotals] = useState({
    partsTotal: 0,
    labourTotal: 0,
    subletTotal: 0,
    taxes: 0,
    deductable: 100,
  });
  useEffect(() => {
    props.setActiveSection("total");
    const serviceData = props.serviceData;
    if (!serviceData) return;
    const computed = serviceData.reduce(
      (acc, job) => {
        job.issue.forEach((issue) => {
          issue.parts.forEach((part) => {
            acc.partsTotal += part.cost_per * part.qty;
            acc.taxes += part.tax_per;
          });

          issue.labour.forEach((labour) => {
            acc.labourTotal += labour.rate * labour.hours;
            acc.taxes += labour.tax_per;
          });

          // If sublets are added later, handle them here:
          // issue.sublets?.forEach(...)
        });

        return acc;
      },
      {
        partsTotal: 0,
        labourTotal: 0,
        subletTotal: 0,
        taxes: 0,
        deductable: 100,
      },
    );

    if (!props.subletData) return;
    const subletTotal = props.subletData.reduce((acc, next) => {
      return (acc += next.cost_per * next.quantity);
    }, 0);
    setTotals({ ...computed, subletTotal: subletTotal });
  }, [props.subletData, props.serviceData]);
  return (
    <Container ref={ref} className="w-[80%] p-4">
      <Text className="text-[1rem] font-semibold">Totals</Text>
      <Box className="w-full border-[1px]  border-gray-200 rounded-md">
        <Table className="w-full">
          <TableThead>
            <TableTr>
              <TableTh className="text-left uppercase text-[0.8rem] text-gray-500 font-normal p-2">
                Total
              </TableTh>
              <TableTh className="text-left uppercase text-[0.8rem] text-gray-500 font-normal p-2">
                Requested
              </TableTh>
            </TableTr>
          </TableThead>

          <TableTbody>
            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2">Parts Total</TableTd>
              <TableTd className="text-[0.8rem] p-2">
                ${totals.partsTotal}
              </TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2">Labour Total</TableTd>
              <TableTd className="text-[0.8rem] p-2">
                ${totals.labourTotal}
              </TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2">Sublet Total</TableTd>
              <TableTd className="text-[0.8rem] p-2">
                ${totals.subletTotal}
              </TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2 font-semibold">
                SubTotal
              </TableTd>
              <TableTd className="text-[0.8rem] p-2 font-semibold">
                ${totals.subletTotal + totals.partsTotal + totals.labourTotal}
              </TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2">Taxes</TableTd>
              <TableTd className="text-[0.8rem] p-2">${totals.taxes}</TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2">
                Deductible For Customer
              </TableTd>
              <TableTd className="text-[0.8rem] p-2">
                ${totals.deductable}
              </TableTd>
            </TableTr>

            <TableTr className="border-t-[1px] border-gray-200">
              <TableTd className="text-[0.8rem] p-2   font-semibold">
                Total
              </TableTd>
              <TableTd className="text-[0.8rem] p-2  font-semibold">
                $
                {Object.values(totals).reduce((acc, next) => (acc += next), 0) -
                  totals.deductable * 2}
              </TableTd>
            </TableTr>
          </TableTbody>
        </Table>
      </Box>
    </Container>
  );
});

export default ClaimTotal;
