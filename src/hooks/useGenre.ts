import { useQuery } from '@tanstack/react-query';
import genres from '../mock/genres';
import genreService from '../services/genreService';

const useGenre = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hr
    initialData: genres,
  });
};

export default useGenre;
