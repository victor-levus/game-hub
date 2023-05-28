import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const gameTitle = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading marginBottom={4} as={"h1"}>
      {gameTitle}
    </Heading>
  );
};

export default GameHeading;
