import { Box, Container, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type CustomerContract = {
  name: string;
  image_url: string;
  status: string;
  contract: string;
  deductable: number;
  vehicle: string;
  total_claims: number;
  term: string;
  vin: string;
};

function CustomerProfile({
  name,
  status,
  imageUrl,
}: {
  name: string;
  status: string;
  imageUrl: string;
}) {
  return (
    <Box className="flex flex-wrap flex-col items-start justify-center text-center gap-2">
      <Image
        src={imageUrl}
        alt="user profile image"
        className="w-[80px] h-[80px] rounded-full object-cover bg-center"
      />
      <Text className="text-[0.8rem] font-medium">{name}</Text>
      <Text
        className={`px-2 py-1 text-[0.6rem] rounded-xl w-fit capitalize ${
          status.toLowerCase() === "active"
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        {status}
      </Text>
    </Box>
  );
}

function CustomerDataColumn({
  firstRowName,
  secondRowName,
  firstRowData,
  secondRowData,
}: {
  firstRowName: string;
  secondRowName: string;
  firstRowData: string | number;
  secondRowData: string | number;
}) {
  return (
    <Box className="flex flex-col gap-4 items-start justify-center">
      <Box>
        <Text className="uppercase text-[0.7rem] text-gray-500">
          {firstRowName}
        </Text>
        <Text className="text-[0.8rem]">{firstRowData}</Text>
      </Box>
      <Box>
        <Text className="uppercase text-[0.7rem] text-gray-500">
          {secondRowName}
        </Text>
        <Text className="text-[0.8rem]">{secondRowData}</Text>
      </Box>
    </Box>
  );
}
export default function ClaimCustomer() {
  const [customerData, setCustomerData] = useState<CustomerContract>();
  useEffect(() => {
    try {
      async function getData() {
        const response = await fetch("../../../examplecustomerdata.json");
        const data = await response.json();
        setCustomerData(data);
      }
      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <Container className="w-[80%] p-4 my-5">
      <Text className="text-[1rem] font-semibold p-2">Customer</Text>
      {customerData && (
        <Box className="p-4 border border-gray-300 rounded-lg grid grid-rows-4  lg:grid-rows-1  lg:grid-cols-4 gap-4 items-center">
          <CustomerProfile
            name={customerData.name}
            status={customerData.status}
            imageUrl={customerData.image_url}
          />
          <CustomerDataColumn
            firstRowName="Contract"
            firstRowData={customerData.contract}
            secondRowName="Total Claims"
            secondRowData={customerData.total_claims}
          />
          <CustomerDataColumn
            firstRowName="Deductable"
            firstRowData={customerData.deductable}
            secondRowName="Term"
            secondRowData={customerData.term}
          />
          <CustomerDataColumn
            firstRowName="Vehicle"
            firstRowData={customerData.vehicle}
            secondRowName="Vin"
            secondRowData={customerData.vin}
          />
        </Box>
      )}
    </Container>
  );
}
