import { ajax } from 'rxjs/ajax';
import { Epic, ofType } from 'redux-observable';
import { from, Observable } from 'rxjs';
import { map, mergeMap, catchError, takeUntil } from 'rxjs/operators';

import {
  FetchPokemonI,
  FETCH_POKEMON,
  POKEMON_CANCELLED,
  PokemonDispatchTypes,
  FetchPokemonFulfilledI,
  PokemonType,
} from './actionTypes';

import { fetchPokemonFulfilled } from './actionCreators';

export const fetchPokemonEpic: Epic<PokemonDispatchTypes> = (action$) =>
  action$.pipe(
    ofType(FETCH_POKEMON),
    mergeMap(
      (action): Observable<FetchPokemonFulfilledI> =>
        from(
          ajax.getJSON(
            `https://pokeapi.co/api/v2/pokemon/${
              (action as FetchPokemonI).payload
            }`,
          ),
        ).pipe(
          map(
            (response): FetchPokemonFulfilledI =>
              fetchPokemonFulfilled(
                response ? (response as PokemonType) : null,
              ),
          ),
          takeUntil(action$.pipe(ofType(POKEMON_CANCELLED))),
          catchError((error): Observable<never> => Observable.throw(error)),
        ),
    ),
  );
