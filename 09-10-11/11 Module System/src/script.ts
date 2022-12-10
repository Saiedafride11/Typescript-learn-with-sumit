import { Player } from "./classes/Player.js"

const mashrafi = new Player( "Mashrafi", 26, "Bangladesh");
const sakib = new Player( "Shakib", 25, "Bangladesh");


console.log(sakib.country)

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// const players: string[] = []
const players: Player[] = []
players.push(sakib)