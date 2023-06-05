import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
import ColorSwitchMode from '../ColorSwitchMode';
import GameSearch from '../GameSearch';

const NavBar = () => {
  console.log('NavBar Component');

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={'cover'} />
      </Link>
      <GameSearch />
      <ColorSwitchMode />
    </HStack>
  );
};
// onSearchGames={onSearchGames}

export default NavBar;
