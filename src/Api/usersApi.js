import axios from 'axios'

export default {
    fetchTravels() {
        return axios.get('http://localhost:8080/api/getall')
    },

    fetchProductById(id) {
        return axios.get(`http://localhost:8080/api/${id}`);
    },
    createTravel(values) {
        let data= new FormData();
        data.append("startdestination",values.start_destination);
        data.append("enddestination",values.end_destination);
        data.append("price",values.price);
        return axios.post('http://localhost:8080/api/createtravel', data);
    }
}