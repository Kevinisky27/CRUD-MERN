class ItemService {
    sendData(data) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${baseURL}/items/add/post`, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    item: JSON.parse(xhr.responseText)
                });
            }
        };
        xhr.send(JSON.stringify({ item: data }));
    }

    updateDate(data, id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${baseURL}/items/update/${id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.setState({
                    items: JSON.parse(xhr.responseText)
                });
            }
        };
        xhr.send(JSON.stringify({ item: data }));
    }

    deleteData(id) {
        const baseURL = process.env.REACT_APP_PUBLIC_URL;
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', `${baseURL}/items/delete/${id}`, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('Deleted');
            }
        };
        xhr.send();
    }
}

export default ItemService;
