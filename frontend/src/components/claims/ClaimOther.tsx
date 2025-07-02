import { Box, Container, Text } from "@mantine/core";
import { forwardRef, useEffect } from "react";

export type PropType = {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const ClaimOther = forwardRef<HTMLDivElement, PropType>((props, ref) => {
  useEffect(() => {
    props.setActiveSection("other");
  }, []);
  return (
    <Container ref={ref} className="w-[80%] p-4">
      <Text className="font-semibold text-[1rem] p-2"> Other Details </Text>

      <Box className="w-full flex  justify-between p-1 items-center h-20">
        <Box className="w-[20%] h-full border border-gray-300 rounded-lg flex flex-col gap-1 p-2">
          <Text className="uppercase text-[0.7rem] text-gray-500">Arrived</Text>
          <Text className="text-[0.8rem]">Towed</Text>
        </Box>
        <Box className="w-[20%] h-full border border-gray-300 rounded-lg flex flex-col gap-1 p-2">
          <Text className="uppercase text-[0.7rem] text-gray-500">
            Commercial Use
          </Text>
          <Text className="text-[0.8rem]">No</Text>
        </Box>

        <Box className="w-[20%] h-full border border-gray-300 rounded-lg flex flex-col gap-1 p-2">
          <Text className="uppercase text-[0.7rem] text-gray-500">
            Physical Damage
          </Text>
          <Text className="text-[0.8rem]">No</Text>
        </Box>
        <Box className="w-[20%] h-full border border-gray-300 rounded-lg flex flex-col gap-1 p-2">
          <Text className="uppercase text-[0.7rem] text-gray-500">
            Modifications
          </Text>
          <Text className="text-[0.8rem]">Oversized wheels</Text>
        </Box>
      </Box>
    </Container>
  );
});

export default ClaimOther;
