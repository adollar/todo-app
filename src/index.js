import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/es/components/Provider";
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
