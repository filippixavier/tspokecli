import { State } from "./state.js";

export async function commandHelp(state: State) {
    console.log(`Welcome to the Pokedex!
Usage:
`);
    for(let man in state.commands) {
        console.log(state.commands[man].description);
    }
}