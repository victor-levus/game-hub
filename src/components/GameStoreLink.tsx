import { Box, Heading, Spinner } from "@chakra-ui/react";
import useStoreLink from "../hooks/useStoreLink";
import DefinitinItem from "./DefinitinItem";
import { Link } from "react-router-dom";
import GameStore from "./GameStore";

interface Props {
  gameId: number;
}

const GameStoreLink = ({ gameId }: Props) => {
  const { data, error, isLoading } = useStoreLink(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const storedata = data?.results;

  return (
    <Box marginY={5}>
      <Heading marginBottom={2} fontSize={"lg"} color={"gray.500"}>
        Game Stores
      </Heading>
      <Box display={"flex"}>
        {storedata?.map((s) => (
          <Link
            style={{ marginRight: "15px" }}
            to={s.url}
            target="_blank"
            key={s.id}
          >
            <GameStore storeId={s.store_id} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default GameStoreLink;
