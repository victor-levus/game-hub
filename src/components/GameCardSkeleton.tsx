import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      height={"330px"}
      width={"300px"}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Skeleton height={{ sm: "250px", md: "200px", lg: "200px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
