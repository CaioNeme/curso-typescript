import { Game } from "../protocols/game-protocol";
import { connection } from "../database/database";

// const games: Game[] = [];

async function getGames() {
  const games = await connection.query("SELECT * FROM games");
  return games.rows
}

async function createGame(game: Game) {
  await connection.query("INSERT INTO games (title, platform) VALUES ($1, $2)", [game.title, game.platform]);
}

async function gameAlreadyExists(game: Game) {
  const result = await connection.query("SELECT * FROM games WHERE title = $1 AND platform = $2", [game.title, game.platform]);
  return result.rowCount > 0
}

// function getGameByTitleAndPlatform(game: Game) {
//   return games.find(({ title, platform }) => {
//     return game.title === title && game.platform === platform;
//   })
// }

const gamesRepository = {
  getGames,
  // getGameByTitleAndPlatform,
  createGame,
  gameAlreadyExists
}

export default gamesRepository;