import { Box, Container, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import FilterItem from "./FilterItem";
import { FaCalendar, FaFileExport } from "react-icons/fa";
import { FaArrowDownWideShort, FaGear, FaUser } from "react-icons/fa6";
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
  const [showGroup, setShowGroup] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.classList.contains("translate-x-0")) {
        ref.current.classList.remove("translate-x-0");
        ref.current.classList.remove("opacity-100");
        ref.current.classList.add("opacity-0");
        ref.current.classList.add("translate-x-100");
      } else if (ref.current.classList.contains("translate-x-100")) {
        ref.current.classList.remove("translate-x-100");
        ref.current.classList.remove("opacity-0");
        ref.current.classList.add("opacity-100");
        ref.current.classList.add("translate-x-0");
      }
    }
  }, [showGroup]);

  const ref = useRef<HTMLDivElement>(null);
  return (
    <Container className="flex h-8 m-0 p-0 border-b-[1px] border-b-gray-200  px-2 justify-between items-center">
      <Box className="flex items-center justify-between w-full gap-2">
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            filter={filter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
        <Box
          onClick={() => {
            setShowGroup(!showGroup);
          }}
        >
          <FaGear className="text-xl lg:hidden" />
          <div className="bg-transparent h-[0.4rem]"></div>
        </Box>
      </Box>

      <Box
        ref={ref}
        className="w-[50%]  translate-x-100 fixed right-0 mt-[14rem] box-border bg-white p-4 gap-2 z-10 opacity-0 transition-all justify-between items-center mb-2  lg:flex lg:relative lg:right-auto lg:m-0 lg:mb-4  lg:opacity-100 lg:z-auto lg:translate-x-0 lg:w-[70%]"
      >
        <Box className=" min-h-[0.8rem] px-2 py-1 rounded-md flex justify-start bg-gray-300 items-center gap-2">
          <CiSearch />
          <input
            placeholder="search"
            className="bg-transparent outline-none text-[0.8rem] placeholder:text-[0.8rem] w-full "
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
