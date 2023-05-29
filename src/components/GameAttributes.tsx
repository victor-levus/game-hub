import { Game } from "../entities/Game";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitinItem from "./DefinitinItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <Heading color={"yellow.600"} marginTop={10} fontSize={"20px"}>
        Game Attributes
      </Heading>
      <SimpleGrid as="dl" columns={2}>
        <DefinitinItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitinItem>
        <DefinitinItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitinItem>
        <DefinitinItem term="Genres">
          {game.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </DefinitinItem>
        <DefinitinItem term="Publishers">
          {game.publishers?.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DefinitinItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
