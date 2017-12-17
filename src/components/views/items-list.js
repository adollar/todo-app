import React from 'react';

export const ItemsList = ({onClick, todos}) =>
    (
        <ul className="tasks-list">
            {todos.map((todo, index) => (
                    <li
                        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                        onClick={
                            () => onClick(todo.id)
                        }
                        key={index}
                    >
                        {todo.text}
                    </li>
                )
            )}
        </ul>
    );