import { Box } from "@mantine/core";

export default function FilterItem({
  selectedFilter,
  setSelectedFilter,
  filter,
}: {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}) {
  const isActive = selectedFilter === filter;
  return (
    <Box
      className={` text-[0.8rem] px-2 py-3 cursor-pointer
        ${isActive ? "text-slate-900" : "text-slate-500"}`}
      onClick={() => setSelectedFilter(filter)}
    >
      {filter}

      <div
        className={`w-full my-1 ${isActive ? "bg-black" : "bg-transparent"} h-[0.4rem] rounded-t-3xl`}
      ></div>
    </Box>
  );
}
