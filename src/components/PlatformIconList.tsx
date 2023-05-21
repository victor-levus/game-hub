import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linus: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={5}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color={"gray.500"}
          as={iconMap[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
