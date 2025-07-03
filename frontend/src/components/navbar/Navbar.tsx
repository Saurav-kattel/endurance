import { Box, Button, Container, Image, Text } from "@mantine/core";
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
        ref.current.classList.add("translate-x-full");
      } else if (ref.current.classList.contains("translate-x-full")) {
        ref.current.classList.remove("translate-x-full");
        ref.current.classList.add("translate-x-0");
      }
    }
  }, [showSidebar]);

  return (
    <Container className="flex  text-[1rem] items-center justify-between w-[l00vw] overflow-x-hidden mt-5 px-2 box-border">
      <Box className="text-xs w-[14%]">
        <Image
          src={
            "https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/217397664_5441259942575133_8233928659499604390_n.png?stp=dst-png&cstp=mx1079x1079&ctp=s1079x1079&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0eHpSmHgrjUQ7kNvwFwsxrW&_nc_oc=AdlrNwuUmdyqX2QZ5iKHb2lD9aWUoaKf6JGcMhznk8Uj3HMiUNimHEaXJTACEhlzjIDlpthQzaXirdUxahRdBtZU&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=7eWWM5l6_QJJLqRC1vHY0Q&oh=00_AfNE9vG5r0gg4nSyhbDyGmynHQIbRq1vs1gO1k_vKDjnPQ&oe=686BF767"
          }
          className="w-[50px] h-[50px]"
          alt="endurace warrenty logo"
        />
      </Box>

      <Box className="text-xs block  md:hidden lg:hidden">
        <RxHamburgerMenu
          onClick={() => setShowSideBar(!showSidebar)}
          className="cursor-pointer text-md"
        />
      </Box>

      <Container
        ref={ref}
        className={`flex w-[80%] flex-col transition-all translate-x-full h-full fixed right-0 top-0 z-10 bg-gray-300 p-2 gap-6 justify-start items-start lg:h-auto lg:bg-transparent lg:flex-row lg:top-auto lg:left-auto lg:relative lg:w-[80%] lg:translate-x-0 md:h-auto md:bg-transparent md:flex-row md:top-auto md:left-auto md:relative md:w-[80%] md:translate-x-0`}
      >
        <RxCross2
          className="block md:hidden lg:hidden"
          onClick={() => {
            setShowSideBar(!showSidebar);
          }}
        />
        {paths.map(({ name, path }) => (
          <Navitem name={name} path={path} key={name} />
        ))}
      </Container>

      <Box className="hidden md:flex lg:flex w-[20%] md:w-[40%] justify-center items-center gap-2">
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
