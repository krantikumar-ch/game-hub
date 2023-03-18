import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform:Platform}[]
  }

interface FetchGameRepsponse {
    count: number;
    results: Game[];
  }

export interface Platform{
    id: number;
    name:string;
    slug:string;
}

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchGameRepsponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((error) => {
            if(error instanceof CanceledError)
              return;
             setError(error.message);});
        return () => controller.abort();
    }, []);

    return{games, error};
}

export default useGames;