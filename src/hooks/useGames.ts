import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import gameService from '../services/gameService';
import { Game } from '../entities/Game';
import useGameQueryStore from '../store';

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 min,
  });
};

export default useGames;
