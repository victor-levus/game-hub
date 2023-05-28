import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card minHeight={"350px"}>
      <Image
        objectFit={{ sm: "fill", md: "cover" }}
        height={"200px"}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <Heading marginTop={5} fontSize={"sm"}>
          {game.name.slice(0, 20)}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
