import { SimpleGrid, Text } from '@chakra-ui/react';
import { lazy } from 'react';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard';
import GameCardContainer from '../GameCardConatainer';
import GameSkeletonCard from '../GameCardSkeleton';

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const lazyCard = [1, 2, 3, 4, 5, 6];

  console.log('The Games', games);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
        {loading &&
          lazyCard.map((lazy) => (
            <GameCardContainer>
              <GameSkeletonCard key={lazy} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
