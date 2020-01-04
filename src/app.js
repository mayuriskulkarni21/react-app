import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeDetails from './components/employeDetails';
import './styles/style.css';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="pt-3 pl-2 font-italic">Employee Details</h2>
                <EmployeDetails />
            </React.Fragment>
        );
    }
}