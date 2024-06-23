import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from './ItemService';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.addItemService = new ItemService();
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addItemService.sendData(this.state.value);
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="container mt-5">
                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h4 className="mb-0">Agregar Tarea</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="taskInput">Nombre de la tarea:</label>
                                <input
                                    type="text"
                                    id="taskInput"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Ingrese la tarea"
                                />
                            </div>
                            <button type="submit" className="btn btn-success mr-2">
                                <i className="fas fa-plus"></i> Agregar
                            </button>
                            <Link to="/" className="btn btn-secondary">
                                <i className="fas fa-arrow-left"></i> Regresar
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;