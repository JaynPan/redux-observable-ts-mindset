export const FETCH_POKEMON = 'FETCH_POKEMON';
export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_CANCELLED = 'POKEMON_CANCELLED';
export const POKEMON_FULLFILLED = 'POKEMON_FULLFILLED';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
} | null;

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface FetchPokemonI {
  type: typeof FETCH_POKEMON;
  payload: string;
}

export interface PokemonLoadingI {
  type: typeof POKEMON_LOADING;
}

export interface FetchPokemonCancelledI {
  type: typeof POKEMON_CANCELLED;
}

export interface FetchPokemonFullfilledI {
  type: typeof POKEMON_FULLFILLED;
  payload: PokemonType;
}

export type PokemonDispatchTypes =
  | FetchPokemonI
  | PokemonLoadingI
  | FetchPokemonCancelledI
  | FetchPokemonFullfilledI;
