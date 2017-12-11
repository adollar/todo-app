import store from '../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import FormInput from '../views/form-input';
import {ItemsList} from "../views/items-list";
import {
    addTodo,
    toggleTodo
} from '../../actions/todo-actions';
import some from 'lodash/some'

class FormInputContainer extends Component
{
    componentDidMount() {
    }

    addItem(event) {
        event.preventDefault();
        const tasks = store.getState().todos;
        const taskExists = some(tasks, {text: this.refs.inputText.value});
        if (!taskExists) {
            store.dispatch(addTodo(this.refs.inputText.value));
            this.refs.inputText.value = '';
        }
    };

    onItemClick(id) {
        store.dispatch(toggleTodo(id))
    }

    render() {
        return (
            <div>
                <FormInput addItem={this.addItem}/>
                <ItemsList onClick={this.onItemClick} todos={this.props.todos}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        todos: store.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: text => {
            dispatch(addTodo(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInputContainer);

