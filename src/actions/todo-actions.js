import * as types from './action-types';
import {v4} from 'node-uuid';

export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        payload: {
            id: v4(),
            text: text,
            completed: false
        }
    };
}

export const toggleTodo = id => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
};