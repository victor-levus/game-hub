import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      height={"330px"}
      maxWidth={"280px"}
      borderRadius={9}
      overflow={"hidden"}
      margin={"0 auto"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
