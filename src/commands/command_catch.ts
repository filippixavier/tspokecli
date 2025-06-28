import { State } from "./state.js";

export async function commandCatch(state: State, ...args: any) {
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

    if (pokemon.base_experience) {
        if (Math.random() * 100 > pokemon.base_experience) {
            console.log(`${pokemonName} was caught`);
        } else {
            console.log(`${pokemonName} escaped!`)
        }
    }
}