export type PokemonData = {
  abilities: Ability[]
  base_experience: number
  cries: Cries
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_abilities: PastAbility[]
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
};

type Ability = {
  ability: Ability2
  is_hidden: boolean
  slot: number
};

type Ability2 = {
  name: string
  url: string
};

type Cries = {
  latest: string
  legacy: string
};

type Form = {
  name: string
  url: string
};

type Index = {
  game_index: number
  version: Version
};

type Version = {
  name: string
  url: string
};

type HeldItem = {
  item: Item
  version_details: VersionDetail[]
};

type Item = {
  name: string
  url: string
};

type VersionDetail = {
  rarity: number
  version: Version2
};

type Version2 = {
  name: string
  url: string
};

type Mfe = {
  move: Move
  version_group_details: VersionGroupDetail[]
};

type Move = {
  name: string
  url: string
};

type VersionGroupDetail = {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  order?: number
  version_group: VersionGroup
};

type MoveLearnMethod = {
  name: string
  url: string
};

type VersionGroup = {
  name: string
  url: string
};

type PastAbility = {
  abilities: Ability3[]
  generation: Generation
};

type Ability3 = {
  ability: any
  is_hidden: boolean
  slot: number
};

type Generation = {
  name: string
  url: string
};

type Species = {
  name: string
  url: string
};

type Sprites = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
  other: Other
  versions: Versions
};

type Other = {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
  showdown: Showdown
};

type DreamWorld = {
  front_default: string
  front_female: any
};

type Home = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type OfficialArtwork = {
  front_default: string
  front_shiny: string
};

type Showdown = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type Versions = {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
};

type GenerationI = {
  "red-blue": RedBlue
  yellow: Yellow
};

type RedBlue = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
};

type Yellow = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
};

type GenerationIi = {
  crystal: Crystal
  gold: Gold
  silver: Silver
};

type Crystal = {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
};

type Gold = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
};

type Silver = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
};

type GenerationIii = {
  emerald: Emerald
  "firered-leafgreen": FireredLeafgreen
  "ruby-sapphire": RubySapphire
};

type Emerald = {
  front_default: string
  front_shiny: string
};

type FireredLeafgreen = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
};

type RubySapphire = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
};

type GenerationIv = {
  "diamond-pearl": DiamondPearl
  "heartgold-soulsilver": HeartgoldSoulsilver
  platinum: Platinum
};

type DiamondPearl = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type HeartgoldSoulsilver = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type Platinum = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type GenerationV = {
  "black-white": BlackWhite
};

type BlackWhite = {
  animated: Animated
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type Animated = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type GenerationVi = {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire
  "x-y": XY
};

type OmegarubyAlphasapphire = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type XY = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type GenerationVii = {
  icons: Icons
  "ultra-sun-ultra-moon": UltraSunUltraMoon
};

type Icons = {
  front_default: string
  front_female: any
};

type UltraSunUltraMoon = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
};

type GenerationViii = {
  icons: Icons2
};

type Icons2 = {
  front_default: string
  front_female: string
};

type Stat = {
  base_stat: number
  effort: number
  stat: Stat2
};

type Stat2 = {
  name: string
  url: string
};

type Type = {
  slot: number
  type: Type2
};

type Type2 = {
  name: string
  url: string
};
