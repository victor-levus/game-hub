import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"header"
                "main"`,

          lg: `"nav main"`,
        }}
        templateColumns={{
          base: `1fr`,
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area={"nav"}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameHeading />
          <Flex gap={3}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default HomePage;
