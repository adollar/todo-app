import React, {Component} from 'react';

export class ItemsList extends Component
{
    constructor(props) {
        super(props);

        this.todos = this.props.todos;
    }

    render() {
        const items = this.todos.map((item, index) => {
            return (<li key={index}>{item.text}</li>)
        });

        return (
            <ul className="tasks-list">
                {items}
            </ul>
        );
    }
}