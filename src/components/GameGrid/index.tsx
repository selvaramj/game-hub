import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard';
import GameCardContainer from '../GameCardConatainer';
import GameSkeletonCard from '../GameCardSkeleton';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const lazyCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log('Game Grid Component');

  if (error) return <Text>{error.message}</Text>;
  const fetchedDataCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedDataCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {!isLoading &&
          data?.pages.map((page) =>
            page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            )),
          )}
        {isLoading &&
          lazyCard.map((lazy) => (
            <GameCardContainer key={lazy}>
              <GameSkeletonCard />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
