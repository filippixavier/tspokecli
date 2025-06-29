import { State } from "./state.js";

export async function commandInspect(state: State, ...args: any) {
    const pokemonName = args[0];

    const pokemon = state.pokedex[pokemonName];

    if(pokemon) {
        console.log(`Name: ${pokemon.name}
Height: ${pokemon.height}
Weight: ${pokemon.weight}
Stats:`);
        for(let stat of pokemon.stats) {
            console.log(`   -${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log('Types:')
        for(let type of pokemon.types) {
            console.log(`   - ${type.type.name}`)
        }
    } else {
        console.log(`${pokemonName} has not been caught`);
    }
}