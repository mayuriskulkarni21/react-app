import React from 'react';
import ReactDragListView from 'react-drag-listview';
import { employee } from '../constants/employeeJSON.js';

class EmployeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: employee
        };
    }

    render() {
        const componentData = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = componentData.state.data;
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                componentData.setState({ data });
            },
            nodeSelector: 'tr',
            handleSelector: 'tr'
        };

        return (
            <ReactDragListView {...dragProps}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="pl-4 pr-2">ID</th>
                            <th className="pl-4 pr-2">Employee Name</th>
                            <th className="pl-4 pr-2">Employee Salary</th>
                            <th className="pl-4 pr-2">Employee Age</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {this.state.data.map((employe, index) => (
                            <tr key={index} className={"rows" + index} >
                                <td className="pl-4 pr-2">{employe.id}</td>
                                <td className="pl-4 pr-2">{employe.employee_name}</td>
                                <td className="pl-4 pr-2">{employe.employee_salary}</td>
                                <td className="pl-4 pr-2">{employe.employee_age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ReactDragListView>
        );
    }
}

export default EmployeDetails;