import { Heading } from '@chakra-ui/react';
import useGenre from '../../hooks/useGenre';
import usePlatforms from '../../hooks/usePlatforms';
import useGameQueryStore from '../../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data: genre } = useGenre();
  const selectedGenre = genre?.results.find((gen) => gen.id === genreId);
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === platformId,
  );
  const heading = `${selectedPlatform?.name || ''} ${
    selectedGenre?.name || ''
  } Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
