import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger';
import rootReducer from './reducers';
import {Provider} from 'react-redux';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )

ReactDOM.render(
    <Provider store={store}>git
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
