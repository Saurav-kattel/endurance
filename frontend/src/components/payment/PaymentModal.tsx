import { Box } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import PaymentSection from "./PaymentSection";
import ConfirmSection from "./ConfirmSection";

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
        className="fixed top-0 flex items-center transition-all right-0 translate-x-full opacity-0 w-[100dvw] box-border h-[100vh]  bg-gray-600/50 ease-in duration-200ms z-[100]"
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
