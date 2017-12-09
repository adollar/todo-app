import React, {Component} from 'react';

export default class FormInput extends Component
{
    render() {
        const style = {
            marginTop: '40px',
        };
        return (
            <div style={style} className="form-group">
                <div className="row">
                    <div className="col-md-8 col-lg-8">
                        <form onSubmit={this.props.addItem.bind(this)}>
                            <input
                                className="form-control"
                                ref="inputText"
                                id="todo-task"
                                placeholder="Enter task"
                                autoFocus
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}