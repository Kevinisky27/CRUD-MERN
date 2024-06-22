import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from './ItemService';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (window.confirm('¿Estás seguro de que deseas eliminar este ítem?')) {
            this.addItemService.deleteData(this.props.obj._id);
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.item}</td>
                <td>
                    <Link to={`edit/${this.props.obj._id}`} className="btn btn-primary btn-sm">Editar</Link>
                </td>
                <td>
                    <button onClick={this.handleSubmit} className="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;