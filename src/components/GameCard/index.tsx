import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../../entities/Game';
import GameCriticScore from '../GameCriticScore';
import GamePlatformIconList from '../GamePlatformIconList';
import GameRatingEmoji from '../GameRatingEmojis/insed';
import getCroppedImageUrl from './../../services/image-url';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <GamePlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
        <Link to={`/game/${game.slug}`}>
          <Heading fontSize="2xl" _hover={{ textDecoration: 'underline' }}>
            {game.name}
          </Heading>
        </Link>
        <GameRatingEmoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
