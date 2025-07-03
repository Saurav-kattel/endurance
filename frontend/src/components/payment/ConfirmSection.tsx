import { Box, Button, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ConfirmHeader() {
  return (
    <>
      <Box>
        <Text className="text-left text-xl font-semibold">You are all set</Text>
        <Text className="text-[0.7rem]  my-1">
          Feel free to send us message with any extra details or files
        </Text>
      </Box>

      <Box className="h-[50%]  flex justify-center items-center">
        <Image
          src={"../../../public/Animation - 1751521879060.gif"}
          alt="confirmation image"
        />
      </Box>
    </>
  );
}

function ConfirmStatus() {
  return (
    <ul className="list-disc">
      <li className="py-2 text-[0.7rem] flex items-center justify-between border-b-[1px] border-gray-300">
        <Text className="text-green-700">Invoice Reviewing</Text>
        <Text>29 July</Text>
      </li>

      <li className="py-2 text-[0.7rem] flex items-center justify-between ">
        <Text>Invoice Reviewing</Text>
        <Text>29 July</Text>
      </li>
      <li className="py-2 text-[0.7rem] flex items-center justify-between">
        <Text>Invoice Reviewing</Text>
        <Text>29 July</Text>
      </li>
    </ul>
  );
}

function ConfirmButtons() {
  const navigate = useNavigate();
  return (
    <Box className="flex w-full items-center justify-end gap-4 mt-14">
      <Button
        onClick={() => navigate("/message")}
        className="text-center px-4 py-1 text-[0.8rem] cursor-pointer border border-slate-300 bg-white rounded-xl"
      >
        Send Message
      </Button>
      <Button
        onClick={() => navigate("/")}
        className="text-center px-4 py-1 text-[0.8rem] cursor-pointer text-white bg-black rounded-xl"
      >
        Back to home
      </Button>
    </Box>
  );
}

export default function ConfirmSection() {
  return (
    <>
      <ConfirmHeader />
      <ConfirmStatus />
      <ConfirmButtons />
    </>
  );
}
