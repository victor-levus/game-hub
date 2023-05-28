import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => page.results.length + acc, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Text
        marginBottom={{ sm: "1", md: "30px" }}
        marginTop={{ sm: "2", md: "-30px" }}
        textAlign={"end"}
      >
        <span>Total Games: </span>
        {fetchedGamesCount}
      </Text>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner color="red" marginY={5} />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          spacing={4}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button marginY={4} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;
