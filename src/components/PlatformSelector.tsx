import {
  Button,
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

import usePlatforms, { Platform } from "../hooks/usePlatform";
import { ReactNode } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === selectedPlatformId);

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

  return (
    <Menu>
      <MenuButton
        textAlign={"left"}
        width={"210px"}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            gap={4}
            minH="48px"
            key={platform.id}
          >
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
