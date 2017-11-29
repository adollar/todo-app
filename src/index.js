import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const todos = JSON.parse(localStorage.getItem('todos'));

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
