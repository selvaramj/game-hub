import { SimpleGrid, Text } from '@chakra-ui/react';
import { lazy } from 'react';
import { GameQuery } from '../../App';
import useGames from '../../hooks/useGames';
import { Genre } from '../../hooks/useGenre';
import { Platform } from '../../hooks/usePlatforms';
import GameCard from '../GameCard';
import GameCardContainer from '../GameCardConatainer';
import GameSkeletonCard from '../GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const lazyCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  console.log('The Games', data);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        {isLoading &&
          lazyCard.map((lazy) => (
            <GameCardContainer key={lazy}>
              <GameSkeletonCard />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
