import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import useGameScreenShots from '../hooks/useGameScreenShots';
interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenShots(gameId);
  console.log('Screen shots', data);
  if (isLoading) <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
