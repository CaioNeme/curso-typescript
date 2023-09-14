import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: Game) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result =await gamesRepository.gameAlreadyExists(game);
  return result;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;