import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video controls poster={first?.preview} src={first?.data["max"]} />
  ) : null;
};

export default GameTrailer;
