import APIClient from "../services/api-client";
import { Store } from "../entities/Store";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useStores = () => {
  const apiClient = new APIClient<Store>(`/stores`);

  return useQuery({
    queryKey: ["stores"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useStores;
