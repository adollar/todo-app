import * as types from '../actions/action-types';

const initialState = {
    todos: []
};

const todoReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        case types.TOGGLE_TODO:
            let filtered = state.todos.map(todo =>
                (todo.id === action.id) ? {
                    ...todo, completed: !todo.completed
                } : todo
            );

            return {todos: filtered};
        default:
            return state;
    }
};

export default todoReducer;