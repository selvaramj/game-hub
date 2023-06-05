import { APIClient } from './api-client';
import { GameDetails } from '../entities/GameDetails';

export default new APIClient<GameDetails>('/games');
