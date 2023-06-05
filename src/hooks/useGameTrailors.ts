import { useQuery } from '@tanstack/react-query';
import { GameTrailors } from '../entities/GameTrailors';
import { APIClient } from '../services/api-client';

const useGameTrailors = (gameId: number) => {
  const apiClient = new APIClient<GameTrailors>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['game-trailors', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailors;
