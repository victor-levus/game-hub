import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
