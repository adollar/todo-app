import React, {Component} from 'react';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {TasksList} from "./components/TasksList";

class App extends Component
{

    render() {
        const style = {
            marginTop: '20px'
        };


        return (
            <div style={style} className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Input/>
                    </div>
                    <div className="col-md-2">
                        <Button/>
                    </div>
                </div>

                <TasksList/>
            </div>
        );
    }
}

export default App;
