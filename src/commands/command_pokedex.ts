import { State } from "./state.js";

export async function commandPokedex(state: State) {
    const keys = Object.keys(state.pokedex);
    if (keys.length === 0) {
        console.log('Pokedex is empty, try catching pokemon using the catch command!');
    } else {
        console.log('Your Pokedex:')
        for (let name of keys) {
            console.log(`   - ${name}`);
        }
    }
}