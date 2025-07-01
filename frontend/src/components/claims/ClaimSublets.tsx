import { Box, Text } from "@mantine/core";
import { forwardRef } from "react";
import type { PropType } from "./Claim";

const ClaimSublets = forwardRef<HTMLDivElement, PropType>((props, ref) => {
  return (
    <Box ref={ref} id="sublet" className="h-[50dvh] w-[90%] p-4">
      <header>
        <Text className="text-[0.8rem] font-semibold">Sublets</Text>
      </header>
    </Box>
  );
});

export default ClaimSublets;
