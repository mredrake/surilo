import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import tracks from './reducers/index';
import api from "./middlewares/api";

const middlewares = applyMiddleware(reduxThunk, api);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = window._state || {
        tracks: [],
        now_playing: null,
        playlist: [],
        np_index: null,
    };

export default createStore(
    tracks,
    initialState,
    composeEnhancers(middlewares)
);
