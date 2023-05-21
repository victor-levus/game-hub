import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header"
                "main" 
                "footer"`,

        lg: `"header header" 
              "nav main" 
              "nav footer"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: "200px 1fr",
      }}
      // gridTemplateRows={"50px 1fr 30px"}
      // gridTemplateColumns={"150px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          pl="2"
          // bg={"gray.900"}
          area={"nav"}
          padding={2}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
