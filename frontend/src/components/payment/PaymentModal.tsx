import { Text, Box, FileInput, Button, Image } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { BsHouseLockFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { PiBank, PiFileThin } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function MethodIcon({
  selectedMethodPayment,
}: {
  selectedMethodPayment: string;
}) {
  switch (selectedMethodPayment.toLowerCase()) {
    case "wired payment":
      return <BsHouseLockFill className="text-gray-500" size={20} />;
    case "bank transfer":
      return <PiBank size={20} className="text-gray-500" />;
    case "cash":
      return <RiMoneyDollarCircleLine size={20} className="text-gray-500" />;
    default:
      return null;
  }
}

function PaymentSection({
  setShowPaymentModal,
  setToggleConfirmationModal,
}: {
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const fileRef = useRef<HTMLButtonElement>(null);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("wired payment");
  return (
    <>
      <Box>
        <Text className="text-left text-xl font-semibold">
          Submit for Payment
        </Text>
        <Text className="text-[0.7rem]  my-1">
          You need to upload invoice, and confirm payment method
        </Text>
      </Box>

      <Box className="p-4 w-[90%] border-[1px] border-gray-300 rounded-md my-4 flex items-center justify-between">
        <Box className="flex items-center justify-center gap-2">
          <FcApproval size={20} />
          <Text className="text-[0.8rem]">$300</Text>
        </Box>
        <Text className="text-gray-400 text-[0.8rem]">invoice</Text>
      </Box>

      <Box>
        <Text className="">Upload Invoice</Text>
        <FileInput ref={fileRef} className="hidden" />
        <Box
          className="flex my-4 h-[15vh] justify-center flex-col border-[1px] border-gray-400 border-dashed rounded-md  text-center text-[0.8rem] text-wrap items-center p-4 "
          onClick={() => fileRef.current?.click()}
        >
          <FaFileUpload className="my-2" size={20} />
          <Text className="text-gray-500">
            darg and drop any files related to this claim or
            <span className="ml-1 text-black font-semibold">
              click here to upload
            </span>
          </Text>
          <Text className="mt-3 text-[0.8rem] text-gray-500">
            Word,PDF,JPEG, PNG(Max 4mb)
          </Text>
        </Box>
      </Box>

      <Text className="py-2 text-[0.9rem]">Select Invoice from Files</Text>
      <Box className="h-[10dvh] w-full flex justify-evenly items-center">
        <FileInput
          classNames={{
            input:
              "text-[0.6rem] text-center whitespace-normal break-words w-full",
          }}
          placeholder={
            <PiFileThin size={20} className="hover:cursor-pointer" />
          }
          className="w-[30%] h-full border border-gray-300 hover:border-gray-500 rounded-lg p-4"
        />

        <FileInput
          classNames={{
            input:
              "text-[0.6rem] text-center whitespace-normal break-words w-full",
          }}
          placeholder={
            <PiFileThin size={20} className="hover:cursor-pointer" />
          }
          className="w-[30%] h-full border border-gray-300 hover:border-gray-500 rounded-lg p-4"
        />
        <FileInput
          classNames={{
            input:
              "text-[0.6rem] text-center whitespace-normal break-words w-full",
          }}
          placeholder={
            <PiFileThin size={20} className="hover:cursor-pointer" />
          }
          className="w-[30%] h-full border border-gray-300 hover:border-gray-500 rounded-lg p-4"
        />
      </Box>
      <Box>
        <Text className="text-[1rem] p-2">Payment Method</Text>
        <Box className="flex justify-start gap-4 items-center p-4 rounded-lg border border-gray-300">
          <MethodIcon selectedMethodPayment={selectedPaymentMethod} />
          <select
            value={selectedPaymentMethod}
            className="outline-none w-[90%]"
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          >
            <option>Wired Payment</option>
            <option>Bank Transfer</option>
            <option>cash</option>
          </select>
        </Box>
      </Box>

      <Box className="flex items-center gap-2 my-2 p-1 ">
        <input type="checkbox" className="accent-black rounded-md" />

        <Text className="text-[0.8rem]">All related invoice are provided</Text>
      </Box>

      <Box className="w-full flex items-center justify-end gap-2 ">
        <Button
          onClick={() => setShowPaymentModal((state) => !state)}
          className="text-center px-4 py-1 text-[0.8rem] cursor-pointer border border-slate-300 bg-white rounded-xl"
        >
          Cancel
        </Button>
        <Button
          onClick={() => setToggleConfirmationModal((state) => !state)}
          className="text-center px-4 py-1 text-[0.8rem] cursor-pointer text-white bg-black rounded-xl"
        >
          Submit For Payment
        </Button>
      </Box>
    </>
  );
}

function ConfirmSection() {
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

      <Box className="flex w-full items-center justify-end gap-4 mt-14">
        <Button className="text-center px-4 py-1 text-[0.8rem] cursor-pointer border border-slate-300 bg-white rounded-xl">
          Send Message
        </Button>
        <Button className="text-center px-4 py-1 text-[0.8rem] cursor-pointer text-white bg-black rounded-xl">
          Back to home
        </Button>
      </Box>
    </>
  );
}

export default function PaymentModal({
  showPaymentModal,
  setShowPaymentModal,
}: {
  showPaymentModal: boolean;
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [toggleConfirmation, setToggleConfirmation] = useState(false);
  useEffect(() => {
    if (showPaymentModal) {
      document.body.style.overflow = "hidden";
      ref.current?.classList.remove("translate-x-full", "opacity-0");
      ref.current?.classList.add("translate-x-0", "opacity-100");
    } else {
      ref.current?.classList.remove("translate-x-0", "opcaity-100");
      ref.current?.classList.add("translate-x-full", "opacity-0");
      if (toggleConfirmation) {
        setToggleConfirmation(!toggleConfirmation);
      }
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPaymentModal]);
  return (
    <>
      <Box
        onClick={() => setShowPaymentModal(!showPaymentModal)}
        ref={ref}
        className="fixed top-0 flex items-center transition-all right-0 translate-x-full opacity-0 w-[100dvw] box-border h-[100vh]  bg-gray-600/50 z-[100]"
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          className=" ml-auto w-[90%] lg:w-[30%] h-[95vh] rounded-xl p-4 mr-2 bg-white"
        >
          {!toggleConfirmation && (
            <PaymentSection
              setToggleConfirmationModal={setToggleConfirmation}
              setShowPaymentModal={setShowPaymentModal}
            />
          )}
          {toggleConfirmation && <ConfirmSection />}
        </Box>
      </Box>
    </>
  );
}
