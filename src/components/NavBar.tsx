import { HStack, Image, Text } from "@chakra-ui/react";

import appLogo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGame from "../hooks/useGames";
import useGameQueryStore from "../store";

const NavBar = () => {
  const { data: games } = useGame(useGameQueryStore);

  const fetchedGamesCount = games?.pages.reduce(
    (acc, page) => page.results.length + acc,
    0
  );

  return (
    <HStack
      justifyContent={"space-between"}
      padding={"10px"}
      position={"fixed"}
      width={"100%"}
      zIndex={5}
      bg={"InfoBackground"}
    >
      <Image src={appLogo} boxSize={"70px"} />
      <SearchInput />
      <Text whiteSpace={"nowrap"} marginX={5} textAlign={"end"}>
        <span>Total Games: </span>
        {fetchedGamesCount}
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
