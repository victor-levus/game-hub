import { HStack, Image, Text } from "@chakra-ui/react";

import appLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px 10px 10px 0"}>
        <Image src={appLogo} boxSize={"70px"} />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
