import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import React from 'react';
import ColorSwitchMode from '../ColorSwitchMode';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
