import React, {Component} from 'react';

export class Button extends Component
{
    render() {
        return (
            <div className="form-group">
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        );
    }
}