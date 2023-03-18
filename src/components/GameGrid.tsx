import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGameRepsponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGameRepsponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return <div>GameGrid</div>;
};

export default GameGrid;
