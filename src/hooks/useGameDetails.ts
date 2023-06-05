import { useQuery } from '@tanstack/react-query';
import { GameDetails } from '../entities/GameDetails';
import gameDetailService from '../services/gameDetailService';

// interface Props {
//   gameId: string;
// }

const useGameDetails = (gameId: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: ['game-details', gameId],
    queryFn: () => gameDetailService.get(gameId),
  });
};

export default useGameDetails;
