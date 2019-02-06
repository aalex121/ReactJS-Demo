import React, {Component} from 'react';
//import BootstrapTable from 'react-bootstrap-table-next';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from 'react-bootstrap/Table'

class Weather extends Component {    
    
    render() {        
        return (
            this.GenerateContent()
        );
    }

    GenerateContent() {
                
        if (this.props.data.cod !== 200) {
            return(<div className="">Nothing</div>);
        }

        return(
            <div className="">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Country</th>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{this.props.data.country}</td>
                        <td>{this.props.data.city}</td>
                        <td>{this.props.data.temp}</td>
                        <td>{this.props.data.pressure}</td>
                        </tr>                        
                    </tbody>
                </Table>
            </div>
        );        
    }
}

export default Weather;