import { State } from "./state.js";

export async function commandMap(state: State) {
    const response = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    state.prevLocationsURL = response.previous || "";
    state.nextLocationsURL = response.next || "";

    for (let result of response.results) {
        console.log(result.name);
    }
}