import React, {Component} from 'react';

export class FormInput extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            currentValue: '',
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleOnChange(event) {
        this.setState({currentValue: event.target.value});
    }

    addItem() {
        let newTask = this.state.currentValue;
        this.setState({currentValue: ''});
        this.props.createTask(newTask);
    }

    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-md-6">
                        <input
                            onChange={this.handleOnChange}
                            type="email"
                            className="form-control"
                            id="todo-task"
                            placeholder="Enter task"
                            value={this.state.currentValue}
                            autoFocus
                        />
                    </div>
                    <div className="col-md-2">
                        <button
                            onClick={this.addItem}
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