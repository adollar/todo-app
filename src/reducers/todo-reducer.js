import * as types from '../actions/action-types';

const initialState = {
    todos: [
        {
            id: 1,
            text: 'test1'
        },
        {
            id: 2,
            text: 'test2'
        }
    ]
};

const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};

export default todoReducer;