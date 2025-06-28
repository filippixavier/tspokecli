export type LocationInfo = {
  encounter_method_rates: EncounterMethodRate[]
  game_index: number
  id: number
  location: Location
  name: string
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

type EncounterMethodRate = {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

type EncounterMethod = {
  name: string
  url: string
}

type VersionDetail = {
  rate: number
  version: Version
}

type Version = {
  name: string
  url: string
}

type Name = {
  language: Language
  name: string
}

type Language = {
  name: string
  url: string
}

type PokemonEncounter = {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

type Pokemon = {
  name: string
  url: string
}

type VersionDetail2 = {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: Version2
}

type EncounterDetail = {
  chance: number
  condition_values: any[]
  max_level: number
  method: Method
  min_level: number
}

type Method = {
  name: string
  url: string
}

type Version2 = {
  name: string
  url: string
}
