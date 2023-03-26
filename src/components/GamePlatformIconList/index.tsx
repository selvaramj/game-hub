import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Text, Icon, HStack } from '@chakra-ui/react';
import { Platform } from './../../hooks/useGames';
import { IconType } from 'react-icons/lib/esm/iconBase';

interface Props {
  platforms: Platform[];
}
const GamePlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack color="gray.500" marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default GamePlatformIconList;
