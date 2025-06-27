import { State } from "./state.js";

export async function commandExplore(state: State, ...args: any) {
    const location = args[0];
    console.log(`Exploring ${location}`);
    const response = await state.pokeapi.fetchLocation(location)
    if (response.pokemon_encounters) {
        console.log('Found Pokemon:');
        for (let pkmn of response.pokemon_encounters) {
            console.log(` - ${pkmn.pokemon.name}`)
        }
    }
}