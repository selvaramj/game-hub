import bullsEye from '../../assets/bulls-eye.webp';
import meh from '../../assets/meh.webp';
import thumpsUp from '../../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props {
  rating: number;
}
const GameRatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '30px' },
    4: { src: thumpsUp, alt: 'recommonded', boxSize: '30px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };
  return <Image {...emoji[rating]} marginTop={1} />;
};

export default GameRatingEmoji;
