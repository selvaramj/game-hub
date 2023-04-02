import { Button, Grid, GridItem, Show, Box, Flex } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GenreList from './components/Genre/GenreList';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import GamePlatformSelector from './components/GamePlatforms/index';
import GameSortSelector from './components/GameSortSelector/index';
import { Platform } from './hooks/usePlatforms';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchGame: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '300px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearchGames={(searchGame) =>
            setGameQuery({ ...gameQuery, searchGame })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <GamePlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
            </Box>
            <GameSortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
