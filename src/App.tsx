import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { StoreTypes } from './store';
import { ping } from './store/pingpong/actionCreators';
import {
  fetchPokemon,
  fetchPokemonCancelled,
} from './store/pokemon/actionCreators';

const App: FC = () => {
  const [pokemonInput, setPokemonInput] = useState('');

  const dispatch = useDispatch();
  const { isPinging } = useSelector((state: StoreTypes) => state.pingpong);
  const { loading, pokemon } = useSelector(
    (state: StoreTypes) => state.pokemon,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setPokemonInput(event.target.value);

  const handleSubmit = (): void => {
    dispatch(fetchPokemon(pokemonInput));
  };

  return (
    <div className="App">
      <h1>Ping with Delay</h1>
      <div>{isPinging && 'loading...'}</div>
      <button onClick={() => dispatch(ping())}>start ping</button>

      <hr />
      <h1>Fetch Pokemon</h1>

      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
      <button type="button" onClick={() => dispatch(fetchPokemonCancelled())}>
        Cancel
      </button>
      {loading && <h1>Loading...</h1>}
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt="" />
          {pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
