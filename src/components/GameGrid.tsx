import { HStack, SimpleGrid, Text } from "@chakra-ui/react";

import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selecetedGenre: Genre | null;
}

const GameGrid = ({ selecetedGenre }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const { data, error, isLoading } = useGame(selecetedGenre, selectedPlatform);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <HStack paddingX={3} justifyContent={"space-between"}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <Text>Total Games: {data.length}</Text>
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={4}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
