import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
interface Props {
  children: string;
}
const Expandable = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.slice(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        fontWeight="bold"
        marginLeft={1}
        size="xs"
      >
        {expanded ? 'Show less' : 'Load more'}
      </Button>
    </Text>
  );
};

export default Expandable;
