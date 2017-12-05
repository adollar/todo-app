import React, {Component} from 'react';
import FormInputContainer from './components/containers/form-input-container'
import store from './store';
import {Provider} from 'react-redux';


export default class App extends Component
{
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <Provider store={store}>
                            <FormInputContainer/>
                        </Provider>
                    </div>
                </div>
            </div>
        );
    }
}