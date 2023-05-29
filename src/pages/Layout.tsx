import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Box padding={5} paddingTop={"130px"}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
