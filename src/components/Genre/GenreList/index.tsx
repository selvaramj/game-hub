import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGameQueryStore from '../../../store';
import useGenre from './../../../hooks/useGenre';
import getCroppedImageUrl from './../../../services/image-url';
import GenreSkeleton from './../GenreSkeleton/index';

const GenreList = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading } = useGenre();
  const dummyGenres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log('Genre list component.');

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
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
                onClick={() => setGenreId(genre.id)}
                fontWeight={genreId == genre.id ? 'bold' : 'normal'}
                color={genreId == genre.id ? '#FC8181' : ''}
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
