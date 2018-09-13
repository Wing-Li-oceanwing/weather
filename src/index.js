import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Game from "./components/Game";
import New from "./components/New";




const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    ))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='App'>
                <ul>
                    <li><Link to="/">App</Link></li>
                    <li><Link to="/games" >Games</Link></li>
                    <li><Link to="new" >New</Link></li>
                </ul>

                <hr/>
                <Route exact path='/' component={App}/>
                <Route path='/games' component={Game}/>
                <Route path='/new' component={New}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
