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
          <Box className="flex flex-wrap flex-col items-start justify-center text-center gap-2">
            <Image
              src={customerData.image_url}
              alt="user profile image"
              className="w-[80px] h-[80px] rounded-full object-cover bg-center"
            />
            <Text className="text-[0.8rem] font-medium">
              {customerData.name}
            </Text>
            <Text
              className={`px-2 py-1 text-[0.6rem] rounded-xl w-fit capitalize ${
                customerData.status.toLowerCase() === "active"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {customerData.status}
            </Text>
          </Box>

          <Box className="flex flex-col gap-4 items-start justify-center">
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">
                Contract
              </Text>
              <Text className="text-[0.8rem]">{customerData.contract}</Text>
            </Box>
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">
                Total Claims
              </Text>
              <Text className="text-[0.8rem]">{customerData.total_claims}</Text>
            </Box>
          </Box>

          <Box className="flex flex-col gap-4 items-start justify-center">
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">
                Deductable
              </Text>
              <Text className="text-[0.8rem]">{customerData.deductable}</Text>
            </Box>
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">
                Term
              </Text>
              <Text className="text-[0.8rem]">{customerData.term}</Text>
            </Box>
          </Box>

          <Box className="flex flex-col gap-4 items-start justify-center">
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">
                Vehicle
              </Text>
              <Text className="text-[0.8rem]">{customerData.vehicle}</Text>
            </Box>
            <Box>
              <Text className="uppercase text-[0.7rem] text-gray-500">VIN</Text>
              <Text className="text-[0.8rem]">{customerData.vin}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
}
