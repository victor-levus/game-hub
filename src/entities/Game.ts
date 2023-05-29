import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  metacritic: number;
  ordering: string;
  slug: string;
  description_raw: string;
  description: string;
}
