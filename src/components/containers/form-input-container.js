import store from '../../store';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import FormInput from '../views/form-input';
import {ItemsList} from "../views/items-list";
import {addTodo} from '../../actions/todo-actions';

class FormInputContainer extends Component
{
    componentDidMount() {
        console.log(this.props, 'container props');
    }

    addItem() {
        console.log('added');
        store.dispatch(addTodo('new action'));
    };

    handleOnChange() {
    }

    render() {
        return (
            <div>
                <FormInput
                    handleOnChange={this.handleOnChange}
                    addItem={this.addItem}
                />
                <ItemsList todos={this.props.todos}/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        todos: store.todos
    }
};

const mapDisptchToProps = dispatch => {
    return {
        addItem: text => {
            dispatch(addTodo(text))
        }
    }
};

export default connect(mapStateToProps, mapDisptchToProps)(FormInputContainer);

