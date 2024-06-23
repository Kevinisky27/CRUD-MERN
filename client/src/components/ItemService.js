import axios from 'axios';

class ItemService {
    sendData(data) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.post(`${baseURL}/items/add/post`, {
            item: data
        })
        .then((response) => {
            this.setState({
                item: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    updateDate(data, id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.post(`${baseURL}/items/update/`+id, {
            item: data
        })
        .then((response) => {
            this.asetState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteData(id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.delete(`${baseURL}/items/delete/`+id)
        .then(() => {
            console.log('Deleted')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default ItemService;