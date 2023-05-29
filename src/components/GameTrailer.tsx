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
    <video
      width={"100%"}
      controls
      poster={first?.preview}
      src={first?.data[480]}
    />
  ) : null;
};

export default GameTrailer;
