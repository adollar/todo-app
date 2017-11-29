import React, {Component} from 'react';
import {FormInput} from "./components/FormInput";
import {ItemsList} from "./components/ItemsList";

class App extends Component
{
    constructor(props) {
        super(props);

        const todos = this.props.todos;

        this.state = {
            todos: todos || []
        };

        this.createTask = this.createTask.bind(this);
    }

    createTask(value) {
        this.state.todos.push({
            text: value
        });

        this.setState({
            todos: this.state.todos
        });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    render() {
        const style = {
            marginTop: '20px'
        };

        return (
            <div style={style} className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <FormInput createTask={this.createTask}/>
                    </div>
                </div>

                <ItemsList todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
