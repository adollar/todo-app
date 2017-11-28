import React, {Component} from 'react';

export class Input extends Component
{
    render() {
        return (
            <div className="form-group">
                <input type="email" className="form-control" id="todo-task" aria-describedby="emailHelp" placeholder="Enter task"/>
            </div>
        );
    }
}