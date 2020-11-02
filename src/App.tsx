import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { StoreTypes } from './store';
import { ping } from './store/pingpong/actionCreators';

const App: FC = () => {
  const dispatch = useDispatch();
  const { isPinging } = useSelector((state: StoreTypes) => state.pingpong);

  return (
    <div className="App">
      <div>{isPinging && 'loading...'}</div>
      <button onClick={() => dispatch(ping())}>start ping</button>
    </div>
  );
};

export default App;
