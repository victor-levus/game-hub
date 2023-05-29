import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header"
                "main"`,

        lg: `"header header" 
              "nav main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem marginTop={"130px"} area={"nav"}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem marginTop={"130px"} marginX={3} area={"main"}>
        <GameHeading />
        <Flex gap={3}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
