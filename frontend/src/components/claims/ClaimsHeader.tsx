import { Box, Container, Paper, Text } from "@mantine/core";

export default function ClaimsHeader() {
  return (
    <Container className="flex justify-center items-center text-xs my-5 py-5 ">
      <Box className="px-4 w-[70%]">
        <Paper>
          <h2 className="text-md font-bold text-[2rem]">Claims</h2>
          <Text className="text-[1rem] ">Toady is 30 july,</Text>
          <Text className="text-[1rem] ">you have 8 claims</Text>
        </Paper>
      </Box>
    </Container>
  );
}
