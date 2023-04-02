import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import useGenre, { Genre } from './../../../hooks/useGenre';
import getCroppedImageUrl from './../../../services/image-url';
import GenreSkeleton from './../GenreSkeleton/index';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();
  const dummyGenres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
                fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'}
                color={selectedGenre?.id == genre.id ? '#FC8181' : ''}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        {isLoading && dummyGenres.map((gen) => <GenreSkeleton key={gen} />)}
      </List>
    </>
  );
};

export default GenreList;
