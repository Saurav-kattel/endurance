import { Box, FileInput, Image, Input, Text, Textarea } from "@mantine/core";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";
import { GrUploadOption } from "react-icons/gr";
import { FaNoteSticky } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";

type PropType = {
  setActiveSection: React.Dispatch<SetStateAction<string>>;
};

function ActionTextArea({
  note,
  setNote,
}: {
  note: string;
  setNote: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <Box className="border flex flex-col justify-center  h-full items-center border-gray-300 w-[90%] lg:w-[30%] rounded-xl">
      <Box className="flex justify-start items-start w-full gap-2 p-2">
        <FaNoteSticky className="h-[1rem]" />
        <Text className="text-[1rem] uppercase">Notes</Text>
      </Box>
      <Box className="w-[90%] h-[80%] rounded-xl p-2">
        <Textarea
          autosize
          minRows={8}
          maxRows={10}
          classNames={{
            input:
              "w-full outline-none  bg-gray-300 text-slate-600 text-[0.9rem] resize-none p-2 rounded-xl",
          }}
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></Textarea>
      </Box>
    </Box>
  );
}

function ActionFileUpload() {
  const fileRef = useRef<HTMLButtonElement>(null);
  return (
    <Box className="border-[1px] border-dashed border-gray-300 w-[90%]  h-full lg:w-[30%] flex flex-col items-center rounded-xl p-2">
      <Box className="flex items-center w-full justify-start h-[20%] gap-2">
        <FaFileUpload />
        <Text className="uppercase text-[1rem]">File</Text>
      </Box>
      <FileInput ref={fileRef} className="hidden" />
      <Box
        className="flex justify-center  text-center text-[0.8rem] text-wrap items-center p-4 "
        onClick={() => fileRef.current?.click()}
      >
        <Text className="text-gray-500">
          darg and drop any files related to this claim or
          <span className="text-black font-semibold">click here to upload</span>
        </Text>
      </Box>
    </Box>
  );
}

function ActionSupportChat({
  message,
  setMessage,
}: {
  message: string;
  setMessage: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <Box className="border border-gray-300 h-full w-[90%] lg:w-[30%] rounded-xl">
      <Box className="h-[80%]">
        <Box className="flex justify-start items-center gap-2">
          <Image
            src={"#"}
            className="w-[30px] h-[30px] rounded-full object-contain bg-center p-2"
          />
          <Text className="text-[0.8rem] uppercase">Support Chat</Text>
        </Box>

        <Box className="flex flex-col justify-center items-center">
          <Box className="px-4 py-2 bg-gray-200  m-2 rounded-md w-[90%]">
            <Text className="text-[0.7rem] text-wrap">
              Do you have any questions or additional notes about this Claim?
              Write it here
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="border-t-[1px] border-gray-300  flex items-center justify-center p-2">
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          classNames={{
            input:
              "outline-none border-none bg-transparent placeholder:text-slate-500 text-[0.8rem]",
          }}
          placeholder="Type your message..."
        />
        <GrUploadOption className="text-gray-300" />
      </Box>
    </Box>
  );
}

const ClaimActions = forwardRef<HTMLDivElement, PropType>((props, ref) => {
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");
  useEffect(() => {
    props.setActiveSection("action");
  }, []);
  return (
    <Box
      ref={ref}
      id="action"
      className="flex flex-col gap-2 lg:gap-0  lg:flex-row justify-between lg:h-[50vh] items-center w-[80%] p-4"
    >
      <ActionSupportChat setMessage={setMessage} message={message} />
      <ActionTextArea setNote={setNote} note={note} />
      <ActionFileUpload />
    </Box>
  );
});

export default ClaimActions;
