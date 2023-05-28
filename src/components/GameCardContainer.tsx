import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      // height={"330px"}
      minWidth={"250px"}
      borderRadius={9}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
