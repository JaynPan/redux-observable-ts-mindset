import {
  POKEMON_CANCELLED,
  FETCH_POKEMON,
  POKEMON_FULLFILLED,
  PokemonDispatchTypes,
  PokemonType,
} from './actionTypes';

interface PokemonStateI {
  loading: boolean;
  pokemon?: PokemonType;
}

const initPokemonState: PokemonStateI = {
  loading: false,
  pokemon: null,
};

const pokemonReducer = (
  state: PokemonStateI = initPokemonState,
  action: PokemonDispatchTypes,
): PokemonStateI => {
  switch (action.type) {
    case POKEMON_CANCELLED:
      return {
        loading: false,
      };
    case FETCH_POKEMON:
      return {
        loading: true,
      };
    case POKEMON_FULLFILLED:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
