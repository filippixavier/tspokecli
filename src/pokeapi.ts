export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const response = await fetch(pageURL || `${PokeAPI.baseURL}/location-area/`);
    return response.json()
  }

  async fetchLocation(locationName: string): Promise<LocationInfo> {
    const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
    return response.json();
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

export type LocationInfo = {
  encounter_method_rates: EncounterMethodRate[]
  game_index: number
  id: number
  location: Location
  name: string
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export type EncounterMethodRate = {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export type EncounterMethod = {
  name: string
  url: string
}

export type VersionDetail = {
  rate: number
  version: Version
}

export type Version = {
  name: string
  url: string
}

export type Name = {
  language: Language
  name: string
}

export type Language = {
  name: string
  url: string
}

export type PokemonEncounter = {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export type Pokemon = {
  name: string
  url: string
}

export type VersionDetail2 = {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: Version2
}

export type EncounterDetail = {
  chance: number
  condition_values: any[]
  max_level: number
  method: Method
  min_level: number
}

export type Method = {
  name: string
  url: string
}

export type Version2 = {
  name: string
  url: string
}
