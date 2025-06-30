import { Box, Button, Container, Text } from "@mantine/core";
import Navitem from "./Navitem";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

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
  return (
    <Container className="flex py-6 justify-between text-[1rem] items-center w-full h-8 mt-5 px-2 box-border">
      <Box className="text-xs">
        <Text>Logo</Text>
      </Box>
      <Box className="flex w-[60%] justify-start items-start gap-6">
        {paths.map(({ name, path }) => (
          <Navitem name={name} path={path} key={name} />
        ))}
      </Box>

      <Box className="w-[30%] flex justify-center items-center gap-2">
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
