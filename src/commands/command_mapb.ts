import { State } from "./state.js";

export async function commandMapBack(state: State) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return
    }
    const response = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = response.previous || "";
    state.nextLocationsURL = response.next || "";

    for (let result of response.results) {
        console.log(result.name);
    }
}