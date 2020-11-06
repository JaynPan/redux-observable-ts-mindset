import { Epic, ofType } from 'redux-observable';
import { from, Observable } from 'rxjs';
import {
  map,
  catchError,
  takeUntil,
  tap,
  switchMap,
  throttleTime,
} from 'rxjs/operators';
import axios from 'axios';

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
    throttleTime(1000),
    switchMap(
      (action): Observable<FetchPokemonFulfilledI> =>
        from(
          axios.request({
            url: `https://pokeapi.co/api/v2/pokemon/${
              (action as FetchPokemonI).payload
            }`,
            method: 'GET',
          }),
        ).pipe(
          tap((res) => console.log('start', res)),
          map(
            (response): FetchPokemonFulfilledI =>
              fetchPokemonFulfilled(
                response ? (response.data as PokemonType) : null,
              ),
          ),
          tap((res) => console.log('end', res)),
          takeUntil(action$.pipe(ofType(POKEMON_CANCELLED))),
          catchError((error): Observable<never> => Observable.throw(error)),
        ),
    ),
  );
