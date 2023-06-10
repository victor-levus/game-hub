import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { StoreLink } from "../entities/StoreLink";

const useStoreLink = (gameId: number) => {
  const apiClient = new APIClient<StoreLink>(`/games/${gameId}/stores`);

  return useQuery({
    queryKey: ["storelinks", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useStoreLink;
