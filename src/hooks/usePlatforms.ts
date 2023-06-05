import { useQuery } from '@tanstack/react-query';
import platforms from '../mock/platforms';
import platformService from '../services/platformService';

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hr
    initialData: platforms,
  });
};

export default usePlatforms;
