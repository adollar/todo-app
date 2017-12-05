import React, {Component} from 'react';

export class ItemsList extends Component
{
    render() {
        const items = this.props.todos ? this.props.todos.map((item, index) => {
            return (<li key={index}>{item.text}</li>)
        }) : '';

        return (
            <ul className="tasks-list">
                {items}
            </ul>
        );
    }
}