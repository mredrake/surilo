import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import tracks from './reducers/index'

import 'bootstrap/dist/css/bootstrap.css';

const initial_state = {
    tracks: [{id: 1, title: 'a'}, {id: 2, title: 'b'}]
}

let store = createStore(tracks, initial_state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
