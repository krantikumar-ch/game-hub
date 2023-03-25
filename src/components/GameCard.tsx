import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import GameCardContainer from "./GameCardContainer";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconsList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="3xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
