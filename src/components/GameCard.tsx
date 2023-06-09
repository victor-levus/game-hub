import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Game } from "../entities/Game";
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
        objectFit={"cover"}
        height={"220px"}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <Box height={"90px"}>
          <Heading marginTop={3} fontSize={"sm"}>
            <Link to={"/games/" + game.slug}>{game.name.slice(0, 20)}</Link>
          </Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
