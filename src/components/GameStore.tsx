import useStore from "../hooks/useStore";
import { Box, HStack, Image, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";

interface Props {
  storeId: number;
}

const GameStore = ({ storeId }: Props) => {
  const storeObj = useStore(storeId);

  console.log(storeObj);

  return (
    <Box>
      <Image
        objectFit={"cover"}
        boxSize={"80px"}
        borderRadius={"5px"}
        src={storeObj?.image_background}
      />

      <Text maxWidth={"80px"} textAlign={"center"}>
        {storeObj?.name}
      </Text>
    </Box>
  );
};

export default GameStore;
