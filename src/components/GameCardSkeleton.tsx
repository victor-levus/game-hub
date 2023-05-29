import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card gap={2}>
      <Skeleton height={"220px"} />
      <CardBody>
        <SkeletonText height={"90px"} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
