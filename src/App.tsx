import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
    >
      <GridItem pl="2" area={"header"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"nav"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <HStack paddingBottom={2} paddingX={2} justifyContent={"space-between"}>
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
        </HStack>
        <GameGrid
          selecetedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
