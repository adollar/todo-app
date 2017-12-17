import {connect} from 'react-redux';
import {ItemsList} from "../views/items-list";
import {toggleTodo} from "../../actions/todo-actions";

const getVisibleTodoList = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodoList(state.todoReducer.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);

export default VisibleTodoList;


