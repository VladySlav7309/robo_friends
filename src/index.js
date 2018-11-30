import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// plugins
import 'tachyons';

// Components
import CardList from './CardList';

// Css
import './index.css';

// static
import { robots } from './robots';

ReactDOM.render(
    <CardList robots={ robots }/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
