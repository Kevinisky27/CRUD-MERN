import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.state = {
            value: ''
        }
    }

    componentDidMount = () => {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.get(`${baseURL}/items/edit/` + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    value: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addItemService.updateDate(this.state.value, this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card shadow-lg border-0">
                    <div className="card-header bg-dark text-white">
                        <h4 className="mb-0">Editar Tarea</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="taskInput">Nombre de la tarea:</label>
                                <input
                                    type="text"
                                    id="taskInput"
                                    value={this.state.value.item}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Ingrese la tarea"
                                />
                            </div>
                            <button type="submit" className="btn btn-success mt-3">
                                <i className="fas fa-edit"></i> Editar
                            </button>
                            <button type="button" className="btn btn-secondary mt-3 ml-2" onClick={() => this.props.history.push('/')}>
                                <i className="fas fa-arrow-left"></i> Regresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;
