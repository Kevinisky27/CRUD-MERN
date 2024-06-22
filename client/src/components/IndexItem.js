import React, { Component } from 'react';
import axios from './axiosConfig';
import TableRow from './TableRow';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
    }

    componentDidMount = () => {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.get(`${baseURL}/items`)
        .then((response) => {
            this.setState({
                items: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    tabRow = () => {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>MERN CRUD</h1>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID Tarea</td>
                            <td>Nombre</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexItem;