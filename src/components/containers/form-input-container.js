import store from '../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import FormInput from '../views/form-input';
import {ItemsList} from "../views/items-list";
import {addTodo} from '../../actions/todo-actions';

class FormInputContainer extends Component
{
    componentDidMount() {
    }

    addItem() {
        store.dispatch(addTodo(this.refs.inputText.value));
        this.refs.inputText.value = '';
    };

    render() {
        return (
            <div>
                <FormInput addItem={this.addItem}/>
                <ItemsList todos={this.props.todos}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    console.log('mapStateToProps');
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

