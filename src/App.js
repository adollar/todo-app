import React, {Component} from 'react';
import Footer from "./components/views/footer";
import VisibleTodoList from "./components/containers/visible-todo-list";
import FormInputContainer from './components/containers/form-input-container'

export default class App extends Component
{
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <FormInputContainer/>
                        <VisibleTodoList/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}