import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Game } from '../../hooks/useGames';
import GameCriticScore from '../GameCriticScore';
import GamePlatformIconList from '../GamePlatformIconList';
import GameRatingEmoji from '../GameRatingEmojis/insed';
import getCroppedImageUrl from './../../services/image-url';

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
        <Heading fontSize="2xl">
          {game.name}
          <GameRatingEmoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
