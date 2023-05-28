import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { platform } from "../data/platformsData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: {
    //   count: platform.length,
    //   results: platform,
    // },
  });

export default usePlatforms;
