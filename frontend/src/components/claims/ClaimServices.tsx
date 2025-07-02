import {
  Accordion,
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
import { forwardRef, useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import type { Issue, JobData, Labour, Part } from "./Claim";

type PropType = {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  serviceData: JobData[];
};

const PartContainer = ({ data }: { data: Part[] }) => {
  return (
    <Box className="w-full overflow-x-scroll lg:overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        <TableThead>
          <TableTr className="uppercase text-[0.8rem] text-gray-500 text-left">
            <TableTh className="p-2 font-normal">Part Number</TableTh>
            <TableTh className="p-2  font-normal">Part Name</TableTh>
            <TableTh className="p-2 font-normal">Qty</TableTh>
            <TableTh className="p-2 font-normal">Wty Mo</TableTh>
            <TableTh className="p-2 font-normal">Wty Miles</TableTh>
            <TableTh className="p-2 font-normal">Cost Per</TableTh>
            <TableTh className="p-2 font-normal">Tax Per</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {data.map((part) => (
            <PartItem data={part} key={part.name} />
          ))}
        </TableTbody>
      </Table>
    </Box>
  );
};

const PartItem = ({ data }: { data: Part }) => {
  return (
    <TableTr className="border-t-[1px] border-t-gray-200" key={data.name}>
      <TableTd className="text-[0.8rem] p-2">{data.part_number}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.name}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.qty}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.wty_mo}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.wty_miles}</TableTd>
      <TableTd className="text-[0.8rem] p-2">${data.cost_per}</TableTd>
      <TableTd className="text-[0.8rem] p-2">${data.tax_per}</TableTd>
    </TableTr>
  );
};

const LabourContainer = ({ data }: { data: Labour[] }) => {
  return (
    <Box className="w-full overflow-x-scroll lg:overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        <TableThead>
          <TableTr className="uppercase text-[0.8rem] text-gray-500 text-left">
            <TableTh className="p-2 font-normal">Labour Description</TableTh>
            <TableTh className="p-2 font-normal">Menu</TableTh>
            <TableTh className="p-2 font-normal">Hours</TableTh>
            <TableTh className="p-2 font-normal">Rate</TableTh>
            <TableTh className="p-2 font-normal">Tax(%)</TableTh>
            <TableTh className="p-2 font-normal">Tax Per</TableTh>
          </TableTr>
        </TableThead>

        <TableTbody>
          {data.map((labour) => (
            <LabourItem data={labour} key={labour.description} />
          ))}
        </TableTbody>
      </Table>
    </Box>
  );
};

const LabourItem = ({ data }: { data: Labour }) => {
  return (
    <TableTr
      key={data.description}
      className="border-t-[1px] border-t-gray-200"
    >
      <TableTd className="text-[0.8rem] p-2 capitalize">
        {data.description}
      </TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.menu}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.hours}</TableTd>
      <TableTd className="text-[0.8rem] p-2">${data.rate}</TableTd>
      <TableTd className="text-[0.8rem] p-2">{data.tax}%</TableTd>
      <TableTd className="text-[0.8rem] p-2">${data.tax_per}</TableTd>
    </TableTr>
  );
};

const IssueItem = ({ data }: { data: Issue }) => {
  const [opened, setOpened] = useState<string | null>(null);
  return (
    <Accordion
      className="ml-2 rounded-md  border-[1px] border-gray-200 bg-white w-[90%]"
      value={opened}
      onChange={setOpened}
      variant="contained"
      chevron={
        opened === data.name ? (
          <FiMinus
            size={30}
            className="bg-white m-1 p-1 rounded-md text-black"
          />
        ) : (
          <GoPlus
            size={30}
            className="bg-white m-1 p-1 text-black rounded-md"
          />
        )
      }
      classNames={{
        chevron: "ml-auto", // Push icon to the right
        control:
          "flex items-center gap-2 text-sm cursor-pointer font-bold capitalize", // Align icon and text
      }}
    >
      <Accordion.Item value={data.name}>
        <Accordion.Control>{data.name}</Accordion.Control>
        <Accordion.Panel>
          <Text className="w-full p-4 box-border bg-gray-100 uppercase text-[0.8rem] font-semibold">
            Parts
          </Text>
          <PartContainer data={data.parts} />

          <Text className="w-full p-4 box-border bg-gray-100 uppercase text-[0.8rem] font-semibold">
            Labour
          </Text>
          <LabourContainer data={data.labour} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

const JobContainer = ({ data }: { data: JobData }) => {
  const [opened, setOpened] = useState<string | null>(null);
  return (
    <Accordion
      value={opened}
      onChange={setOpened}
      className="p-4 box-border w-full cursor-pointer hover:bg-gray-100  rounded-xl bg-gray-50"
      variant="contained"
      chevron={
        opened === data.name ? (
          <FiMinus
            size={30}
            className="bg-white m-1 p-1 rounded-md text-black"
          />
        ) : (
          <GoPlus
            size={30}
            className="bg-white m-1 p-1 text-black rounded-md"
          />
        )
      }
      classNames={{
        chevron: "ml-auto",
        control:
          "flex items-center justify-between  cursor-pointer gap-2 text-sm",
        content: "flex flex-col justify- item-start w-full gap-2 p-2 m-2 ",
      }}
    >
      <Accordion.Item value={data.name}>
        <Box className="flex w-full justify-between items-center">
          <Accordion.Control>
            <Text className="text-[0.5rem] lg:text-[0.8rem]">
              {" "}
              {data.name}{" "}
            </Text>
          </Accordion.Control>

          <Text className="lg:text-[0.8rem]  text-[0.5rem] border-b-[1px] border-b-slate-300 border-dashed">
            Complainet, Cause, Correction
          </Text>
        </Box>
        <Accordion.Panel>
          {data.issue.map((issue) => (
            <IssueItem key={issue.name} data={issue} />
          ))}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

const ClaimServices = forwardRef<HTMLDivElement, PropType>((props, ref) => {
  const [total, setTotal] = useState(0);
  const serviceData = props.serviceData;
  useEffect(() => {
    props.setActiveSection("service");
    const totalPrice = serviceData?.reduce((acc, job) => {
      const jobTotal = job.issue.reduce((issueAcc, issue) => {
        const issueTotal = issue.parts.reduce((partAcc, part) => {
          return partAcc + part.cost_per + part.tax_per;
        }, 0);
        return issueAcc + issueTotal;
      }, 0);
      return acc + jobTotal;
    }, 0);
    setTotal(totalPrice);
  }, []);
  return (
    <Container ref={ref} className="w-[80%] p-4">
      <Text className="text-[1rem] flex gap-2 items-center font-semibold">
        Services
        <Text className="text-[0.8rem] text-gray-500">${total}</Text>
      </Text>
      <Box className="flex justify-center items-start w-full flex-col gap-4  mt-4">
        {serviceData?.map((data) => (
          <JobContainer data={data} key={data.name} />
        ))}
      </Box>
    </Container>
  );
});

export default ClaimServices;
