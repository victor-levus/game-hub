import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const gameTitle = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return (
    <Heading marginBottom={4} as={"h1"}>
      {gameTitle}
    </Heading>
  );
};

export default GameHeading;
