import { Box, Button, Container, Text } from "@mantine/core";
import Navitem from "./Navitem";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export type Path = {
  name: string;
  path: string;
};

const paths: Path[] = [
  { name: "Home", path: "/" },
  { name: "Claims", path: "/claims" },
  { name: "Messages", path: "/messages" },
];

export default function Navbar() {
  const user = useUser();
  const ref = useRef<HTMLDivElement>(null);
  const [showSidebar, setShowSideBar] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.classList.contains("translate-x-0")) {
        ref.current.classList.remove("translate-x-0");
        ref.current.classList.add("translate-x-100");
      } else if (ref.current.classList.contains("translate-x-100")) {
        ref.current.classList.remove("translate-x-100");
        ref.current.classList.add("translate-x-0");
      }
    }
  }, [showSidebar]);

  return (
    <Container className="flex  text-[1rem] items-center justify-between w-[l00vw] overflow-x-hidden mt-5 px-2 box-border">
      <Box className="text-xs w-[12%]">
        <Text>Logo</Text>
      </Box>

      <Box className="text-xs block  lg:hidden">
        <RxHamburgerMenu
          onClick={() => setShowSideBar(!showSidebar)}
          className="cursor-pointer text-md"
        />
      </Box>

      <Container
        ref={ref}
        className={`flex w-[80%] flex-col transition-all translate-x-100 h-full fixed right-0 top-0 z-10 bg-gray-300 p-2 gap-6 justify-start items-start lg:h-auto lg:bg-transparent lg:flex-row lg:top-auto lg:left-auto lg:relative lg:w-[80%] lg:translate-x-0`}
      >
        <RxCross2
          className="block lg:hidden"
          onClick={() => {
            setShowSideBar(!showSidebar);
          }}
        />
        {paths.map(({ name, path }) => (
          <Navitem name={name} path={path} key={name} />
        ))}
      </Container>

      <Box className="hidden lg:flex w-[20%]  justify-center items-center gap-2">
        <Box className="flex items-center justify-center">
          {user.isSignedIn && <UserButton />}
          {!user.isSignedIn && (
            <Box className="text-black cursor-pointer hover:cursor-pointer">
              <SignInButton />
            </Box>
          )}
          <Text className="text-[0.8rem] p-2">{user.user?.fullName}</Text>
        </Box>
        <Button className="bg-black  cursor-pointer rounded-2xl px-3 py-1  text-white">
          + new
        </Button>
      </Box>
    </Container>
  );
}
