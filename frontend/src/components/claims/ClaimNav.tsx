import { Anchor, Box } from "@mantine/core";
import { useState } from "react";

export default function ClaimNav({ activeSection }: { activeSection: string }) {
  const [navitems] = useState([
    { name: "Actions", id: "#action" },
    { name: "Sublets", id: "#sublet" },
    { name: "Services", id: "#service" },
    { name: "Totals", id: "#total" },
    { name: "Other", id: "#other" },
  ]);
  console.log({ activeSection });
  return (
    <Box className="w-[90%]">
      <nav className="flex w-[40%] items-center text-[0.8rem] my-3 justify-between capitalize text-gray-500">
        {navitems.map((item) => {
          return (
            <Box>
              <Anchor
                className={`${activeSection === item.id.slice(1) ? "text-slate-700" : null}`}
                key={item.id}
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
    </Box>
  );
}
