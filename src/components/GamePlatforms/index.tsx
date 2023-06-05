import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../../hooks/usePlatforms';
import { Platform } from '../../entities/Platform';
import useGameQueryStore from '../../store';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const GamePlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === platformId,
  );
  console.log('Game Platform component.');

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GamePlatformSelector;
