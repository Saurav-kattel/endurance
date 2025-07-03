import { Anchor, Box, Button } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

export default function ClaimNav({
  activeSection,
  setShowPaymentModal,
}: {
  activeSection: string;
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [navitems] = useState([
    { name: "Actions", id: "#action" },
    { name: "Sublets", id: "#sublet" },
    { name: "Services", id: "#service" },
    { name: "Totals", id: "#total" },
    { name: "Other", id: "#other" },
  ]);
  const [showButton, setShowButton] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;

      if (!ref.current) return;

      // Get distance from top of viewport
      const rect = ref.current.getBoundingClientRect();

      // Check if nav is stuck (top <= 0 means sticky active)
      const isStuck = rect.top <= 0;

      if (!isStuck) {
        setShowButton(false);
        lastScrollY.current = currentScrollY;
        return;
      }
      // If stuck, hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        ref.current.classList.remove("translate-y-0", "opacity-100");
        ref.current.classList.add("translate-y-[-100px]", "opacity-20");
      } else {
        setShowButton(true);
        ref.current.classList.remove("translate-y-[-100px]", "opacity-20");
        ref.current.classList.add("translate-y-0", "opacity-100");
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Box
      ref={ref}
      className={`w-[90%]  lg:w-[80%] flex justify-between items-center transition-all p-4 sticky top-0  left-0 bg-white  translate-y-0 opacity-100`}
    >
      <nav className="flex w-full lg:w-[40%] items-center text-[0.8rem] my-3 justify-between capitalize text-gray-500">
        {navitems.map((item) => {
          return (
            <Box key={item.id}>
              <Anchor
                className={`${activeSection === item.id.slice(1) ? "text-slate-700" : null}`}
                href={item.id}
              >
                {item.name}
              </Anchor>
              {activeSection === item.id.slice(1) && (
                <Box className="h-[0.2rem] bg-black rounded-xl"></Box>
              )}
            </Box>
          );
        })}
      </nav>

      {showButton && (
        <Button
          onClick={() => setShowPaymentModal((state) => !state)}
          className="bg-black hidden lg:block cursor-pointer px-4 py-2 text-[0.8rem] rounded-2xl text-white"
        >
          submit for payment
        </Button>
      )}
    </Box>
  );
}
