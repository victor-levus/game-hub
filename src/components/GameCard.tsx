import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"1.5xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
