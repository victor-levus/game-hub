import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  ordering: string;
  slug: string;
  description_raw: string;
  description: string;
}
