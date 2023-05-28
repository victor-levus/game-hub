import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card gap={2}>
      <Skeleton height={{ sm: "250px", md: "200px", lg: "200px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
