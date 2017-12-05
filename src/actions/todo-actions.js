import * as types from './action-types';

export function addTodo(text) {
    console.log('inside action');
    return {
        type: types.ADD_TODO,
        payload: {
            id: 1,
            text: text
        }
    };
}