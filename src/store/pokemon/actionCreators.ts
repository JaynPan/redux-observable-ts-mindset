import {
  POKEMON_FULLFILLED,
  POKEMON_CANCELLED,
  FETCH_POKEMON,
  PokemonType,
  FetchPokemonFulfilledI,
  FetchPokemonCancelledI,
  FetchPokemonI,
} from './actionTypes';

export const fetchPokemon = (index: string): FetchPokemonI => ({
  type: FETCH_POKEMON,
  payload: index,
});

export const fetchPokemonFulfilled = (
  data: PokemonType,
): FetchPokemonFulfilledI => ({
  type: POKEMON_FULLFILLED,
  payload: data,
});

export const fetchPokemonCancelled = (): FetchPokemonCancelledI => ({
  type: POKEMON_CANCELLED,
});
