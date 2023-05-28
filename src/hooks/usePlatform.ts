import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { platform } from "../data/platformsData";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: {
    //   count: platform.length,
    //   results: platform,
    // },
  });

export default usePlatforms;
