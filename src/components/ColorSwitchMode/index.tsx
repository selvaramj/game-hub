import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';
import React from 'react';

const ColorSwitchMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
};

export default ColorSwitchMode;
