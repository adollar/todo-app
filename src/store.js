import todoReducer from './reducers/todo-reducer';
import {
    combineReducers,
    createStore
} from 'redux';
import {visibilityFilter} from './reducers/visibility-filter';

const todoApp = combineReducers({
        todoReducer,
        visibilityFilter
    }
);
const store = createStore(todoApp);

export default store;
