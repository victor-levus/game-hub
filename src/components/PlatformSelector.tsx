import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsGlobe, BsApp } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms from "../hooks/usePlatform";
import { ReactNode } from "react";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
    others: <BsApp />,
  };

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem gap={4} minH="48px" key={platform.id}>
            {!iconMap[platform.slug]
              ? iconMap["others"]
              : iconMap[platform.slug]}
            <Text>{platform.name}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
