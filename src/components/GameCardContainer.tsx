import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      height={"330px"}
      maxWidth={"500px"}
      borderRadius={4}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
