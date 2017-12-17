import some from 'lodash/some'
import store from '../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import FormInput from '../views/form-input';
import {addTodo} from '../../actions/todo-actions';

class FormInputContainer extends Component
{
    addItem(event) {
        event.preventDefault();
        const tasks = store.getState().todos;
        const taskExists = some(tasks, {text: this.refs.inputText.value});
        if (!taskExists) {
            store.dispatch(addTodo(this.refs.inputText.value));
            this.refs.inputText.value = '';
        }
    };

    render() {
        return (
            <div>
                <FormInput addItem={this.addItem}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        todos: store.todoReducer.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: text => {
            dispatch(addTodo(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormInputContainer);

