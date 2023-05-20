import { HStack, Image, Text } from "@chakra-ui/react";

import appLogo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={appLogo} boxSize={"70px"} />
        <Text>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
