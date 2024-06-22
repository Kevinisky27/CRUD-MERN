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
            this.props.onDelete(this.props.obj._id);
        }
    }

    render() {
        return (
            <div className="card mb-3 shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="item-info">
                        <h5 className="card-title">ID: {this.props.obj._id}</h5>
                        <p className="card-text" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                            Tarea: {this.props.obj.item}
                        </p>
                    </div>
                    <div className="item-actions">
                        <Link to={`edit/${this.props.obj._id}`} className="btn btn-primary btn-sm mr-2">
                            <i className="fas fa-edit"></i> Editar
                        </Link>
                        <button onClick={this.handleSubmit} className="btn btn-danger btn-sm">
                            <i className="fas fa-trash-alt"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableRow;
