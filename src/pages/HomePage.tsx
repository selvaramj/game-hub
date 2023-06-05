import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GamePlatformSelector from '../components/GamePlatforms';
import GameSortSelector from '../components/GameSortSelector';
import GenreList from '../components/Genre/GenreList';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '300px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <GamePlatformSelector />
            </Box>
            <GameSortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
