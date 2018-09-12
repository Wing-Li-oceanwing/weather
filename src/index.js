import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from 'redux-logger';
import rootReducer from './reducers'


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();