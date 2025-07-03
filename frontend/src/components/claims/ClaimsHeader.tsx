import { Box, Container, Paper, Text } from "@mantine/core";
import { useState, useEffect } from "react";

export default function ClaimsHeader({ totalClaims }: { totalClaims: number }) {
  const [date, setDate] = useState("dd/mm");
  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" }); // "July"
    setDate(`${day} ${month}`);
  }, []);
  return (
    <Container className="flex justify-center items-center text-xs my-5 py-5 ">
      <Box className="px-4 w-[80%]">
        <Paper>
          <h2 className="text-md font-bold text-[2rem]">Claims</h2>
          <Text className="text-[1rem] ">Toady is {date},</Text>
          <Text className="text-[1rem] ">
            you have {totalClaims.toString()} claims
          </Text>
        </Paper>
      </Box>
    </Container>
  );
}
