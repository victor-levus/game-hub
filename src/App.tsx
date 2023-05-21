import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <HStack paddingBottom={2} paddingX={2} justifyContent={"space-between"}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
