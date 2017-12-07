import {createStore} from 'redux';
import todoReducer from './reducers/todo-reducer';
import {
    loadState,
    saveState
} from './lib/localStorage'

const persistedState = loadState();
const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
