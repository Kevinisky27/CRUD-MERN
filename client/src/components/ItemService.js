import axios from 'axios';

class ItemService {
    sendData(data) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.post(`${baseURL}/items/add`, {  // Corrige la ruta aquí
            item: data
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    updateData(data, id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.post(`${baseURL}/items/update/${id}`, {  // Corrige la ruta aquí
            item: data
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    deleteData(id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        axios.delete(`${baseURL}/items/delete/${id}`)
        .then(() => {
            console.log('Deleted');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default ItemService;
