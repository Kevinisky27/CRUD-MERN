import React, { Component } from 'react';
import axios from './axiosConfig';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
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
        if (this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} onDelete={this.handleDelete} />
            })
        }
    }

    handleDelete = (id) => {
        this.setState({
            items: this.state.items.filter(item => item._id !== id)
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="text-center">MERN CRUD</h1>
                    <Link to="/add-item" className="btn btn-success">
                        <i className="fas fa-plus"></i> Agregar Tarea
                    </Link>
                </div>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        
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
