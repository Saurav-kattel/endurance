import { Box, Container, Text } from "@mantine/core";
import { useState } from "react";
import FilterItem from "./FilterItem";
import { FaCalendar, FaFileExport, FaSearchengin } from "react-icons/fa";
import { FaArrowDownWideShort, FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function ClaimsFilter({
  selectedFilter,
  setSelectedFilter,
}: {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [filters] = useState<string[]>([
    "All",
    "Authorized",
    "Pending",
    "Declined",
  ]);

  return (
    <Container className="flex h-8 m-0 p-0 border-b-[1px] border-b-gray-200  px-2 justify-between items-center">
      <Box>
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            filter={filter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
      </Box>

      <Box className="w-[50%] flex justify-between items-center mb-2">
        <Box className="w-[30%] min-h-[0.8rem] px-2 py-1 rounded-md flex justify-start bg-gray-300 items-center gap-2">
          <CiSearch />
          <input
            placeholder="search"
            className="bg-transparent outline-none text-[0.8rem] placeholder:text-[0.8rem] w-full"
          />
        </Box>
        <Box className="text-[0.8rem] border-[1px] border-gray-200 rounded-sm p-1 cursor-pointer flex items-center font-semibold justify-start gap-1">
          <FaUser size={10} />
          <Text>Assigned</Text>
        </Box>

        <Box className="text-[0.8rem] flex   border-[1px] border-gray-200 rounded-sm p-1   cursor-pointer items-center font-semibold justify-start gap-1">
          <FaCalendar size={10} />
          <Text>Date</Text>
        </Box>

        <Box className="text-[0.8rem] flex cursor-pointer   border-[1px] border-gray-200 rounded-sm p-1 font-semibold  items-center justify-start gap-1">
          <FaArrowDownWideShort size={10} />
          <Text>Group</Text>
        </Box>

        <Box className="text-[0.8rem] flex items-center font-semibold  cursor-pointer   border-[1px] border-gray-200 rounded-sm p-1 justify-start gap-1">
          <FaFileExport size={10} />
          <Text>Group</Text>
        </Box>
      </Box>
    </Container>
  );
}
