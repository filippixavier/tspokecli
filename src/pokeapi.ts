import { Cache } from "./pokecache.js";
import { type PokemonData } from "./pokemon_data.js";
import { type LocationInfo } from "./pokemon_location.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  #cache = new Cache(5 * 60_000)

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
    const entry = this.#cache.get<ShallowLocations>(url);
    
    if (entry) {
      return entry;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json: ShallowLocations = await response.json()
      
      this.#cache.add(url, json);
      
      return json;
    } catch (e) {
      throw new Error(`Error fetching locations: ${(e as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<LocationInfo> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const entry = this.#cache.get<LocationInfo>(url);

    if (entry) {
      return entry;
    }
    
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json: LocationInfo = await response.json();
  
      this.#cache.add(url, json);
  
      return json  
    } catch (e) {
      throw new Error(`Error fetching location: ${(e as Error).message}`);
    }
  }

  async fetchPokemon(pokemon: string): Promise<PokemonData> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemon}`;

    const entry = this.#cache.get<PokemonData>(url);

    if (entry) {
      return entry;
    }

    try {
      const response = await fetch(url);

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json: PokemonData = await response.json();

      this.#cache.add(url, json);

      return json;
    } catch (e) {
      throw new Error(`Error fetching pokémon: ${(e as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: Location[]
};

export type Location = {
  name: string,
  url: string
};