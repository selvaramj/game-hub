import { Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import useGameTrailors from '../hooks/useGameTrailors';
interface Props {
  gameId: number;
}
const GameTrailors = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailors(gameId);
  if (isLoading) <Spinner />;
  console.log('Trailor', data);
  if (error) throw error;
  const first = data?.results[0];
  if (!first) return <Text>Video not found..</Text>;
  return <video controls src={first?.data[480]} poster={first?.preview} />;
};

export default GameTrailors;
