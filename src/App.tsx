import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
