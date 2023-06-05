import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../../store';
import { useNavigate } from 'react-router-dom';
interface Props {
  onSearchGames: (searchGame: string) => void;
}
const GameSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchGame = useGameQueryStore((s) => s.setSearchText);
  console.log('Game Search Component');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchGame(ref.current.value);
          navigate('/');
        }
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
