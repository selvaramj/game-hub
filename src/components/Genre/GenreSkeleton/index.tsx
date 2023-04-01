import React from 'react';
import {
  ListItem,
  HStack,
  Image,
  Text,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <ListItem paddingY="10px">
      <HStack>
        <SkeletonCircle boxSize="32px" />
        <SkeletonText noOfLines={1} width="70%" />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
