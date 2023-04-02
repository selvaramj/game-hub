import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import React from 'react';
import ColorSwitchMode from '../ColorSwitchMode';
import GameSearch from '../GameSearch';

interface Props {
  onSearchGames: (searchGame: string) => void;
}

const NavBar = ({ onSearchGames }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <GameSearch onSearchGames={onSearchGames} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
