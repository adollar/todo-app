import React, {Component} from 'react';

export default class FormInput extends Component
{
    getInput(){
        return this.refs.inputText.value
    } 
    
    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-md-6">
                        <input
                            onChange={this.props.handleOnChange}
                            type="email"
                            className="form-control"
                            ref="inputText"
                            id="todo-task"
                            placeholder="Enter task"
                            autoFocus
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            onClick={this.props.addItem.bind(this)}
                            type="button"
                            className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}