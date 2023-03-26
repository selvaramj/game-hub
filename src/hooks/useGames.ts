import React, { useState, useEffect } from 'react';
import apiClient, { CanceledError } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface FetchGamesResponse {
  count: string;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
