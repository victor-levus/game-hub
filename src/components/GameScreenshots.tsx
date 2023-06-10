import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={3} columns={{ base: 1, md: 2 }}>
      {data?.results.map((f) => (
        <Image key={f.id} src={f.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
