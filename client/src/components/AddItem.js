import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.state = {
            value: ''
        };
    }

    componentDidMount = () => {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.get(`${baseURL}/items/add/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({
                    value: response.data.item
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

    handleSubmit = async (event) => {
        event.preventDefault();
        // Enviar los datos actualizados de la tarea a la API
        await this.addItemService.updateDate({ item: this.state.value }, this.props.match.params.id);
        // Redireccionar a la página principal
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h4 className="mb-0">Editar Tarea</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="taskInput">Editar tarea:</label>
                                <input
                                    type="text"
                                    id="taskInput"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Editar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;
