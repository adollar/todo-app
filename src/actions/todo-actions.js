import {v4} from 'node-uuid';
import * as types from './action-types';

export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        payload: {
            id: v4(),
            text: text,
            completed: false
        }
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = id => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
};