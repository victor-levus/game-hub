import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const gameTitle = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading marginBottom={4} as={"h1"}>
      {gameTitle}
    </Heading>
  );
};

export default GameHeading;
