import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import { searchRobots } from './reducers.js';

// plugins
import 'tachyons';

// Components
import App from './containers/App.jsx';

// Css
import './index.css';

const store = createStore( searchRobots );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
