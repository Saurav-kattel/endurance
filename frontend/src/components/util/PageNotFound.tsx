import { Box, Text } from "@mantine/core";

export default function PageNotFound() {
  return (
    <Box className="w-full h-[100vh] flex items-center justify-center text-xl text-gray-400 flex-col gap-8">
      <Text> 404</Text>
      <Text> Page Not Found</Text>
    </Box>
  );
}
