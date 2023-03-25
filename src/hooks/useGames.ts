import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
  }

export interface Platform{
    id: number;
    name:string;
    slug:string;
}

const useGames = (gameQuery: GameQuery) => {
 return useData<Game>("/games",
 {params:
    {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}
  },
  [gameQuery]);
}
export default useGames;