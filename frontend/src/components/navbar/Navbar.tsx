import { Box } from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/claims"}>Claims</NavLink>
    </Box>
  );
}
