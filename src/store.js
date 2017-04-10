import { createStore } from 'redux';

import tracks from './reducers/index';

const initialState = window._state || {
  tracks     : [],
  now_playing: null,
  playlist   : []
};

export default createStore(
  tracks,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
