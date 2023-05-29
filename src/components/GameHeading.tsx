import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const gameTitle = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading marginBottom={4} as={"h1"}>
      {gameTitle}
    </Heading>
  );
};

export default GameHeading;
