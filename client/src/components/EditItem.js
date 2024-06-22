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
        axios.get(`${baseURL}/items/edit/`+this.props.match.params.id)
        .then((response) => {
            this.setState({
                value: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
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
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Editar tarea:
                        <input
                            type="text"
                            value={this.state.value.item}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Editar"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default EditItem;