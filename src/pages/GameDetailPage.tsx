import useGameDetails from '../hooks/useGameDetails';
import { useParams } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import Expandable from '../components/Expandable';
import GameAttributes from '../components/GameAttributes';
import GameTrailors from '../components/GameTrailors';
import GameScreenShots from '../components/GameScreenShots';
import useGameQueryStore from '../store';

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGameDetails(id!);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  if (isLoading) return <Spinner />;
  if (error || !game) return <p>{error.message}</p>;
  console.log('Game-details', searchText);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game?.name}</Heading>
        <Expandable>{game.description_raw}</Expandable>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailors gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
