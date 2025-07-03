import { Box, Button, FileInput, Text } from "@mantine/core";
import { useRef, useState } from "react";
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

function PaymentFileUpload() {
  const fileRef = useRef<HTMLButtonElement>(null);
  return (
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
  );
}

function PaymentHeader() {
  return (
    <>
      <Box className=" animate-slideInRight">
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
    </>
  );
}

function PaymentInvoiceUpload() {
  return (
    <Box className=" animate-slideInRight">
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
    </Box>
  );
}

function PaymentMethod() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("wired payment");
  return (
    <Box className=" animate-slideInRight">
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
  );
}

function PaymentFooter() {
  return (
    <Box className="flex items-center gap-2 my-2 p-1 animate-slideInRight ">
      <input type="checkbox" className="accent-black rounded-md" />

      <Text className="text-[0.8rem]">All related invoice are provided</Text>
    </Box>
  );
}

function PaymentButtons({
  setShowPaymentModal,
  setToggleConfirmationModal,
}: {
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box className="w-full flex items-center justify-end gap-2 animate-slideInRight ">
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
  );
}

export default function PaymentSection({
  setShowPaymentModal,
  setToggleConfirmationModal,
}: {
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <PaymentHeader />
      <PaymentFileUpload />
      <PaymentInvoiceUpload />
      <PaymentMethod />
      <PaymentFooter />
      <PaymentButtons
        setShowPaymentModal={setShowPaymentModal}
        setToggleConfirmationModal={setToggleConfirmationModal}
      />
    </>
  );
}
