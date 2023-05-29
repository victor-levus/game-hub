import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <>
      <Text marginY={3} textAlign={"justify"}>
        {expanded ? children : summary + "......"}
      </Text>
      <Text paddingY={2} textAlign={"end"}>
        <Button
          fontSize={"lg"}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
