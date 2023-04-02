import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
interface Props {
  onSearchGames: (searchGame: string) => void;
}
const GameSearch = ({ onSearchGames }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearchGames(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default GameSearch;
