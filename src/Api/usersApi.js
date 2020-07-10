import HTTP from '.'

export default {
    fetchTravels() {
        return HTTP.get('http://localhost:8080/api/getall')
    },

    fetchProductById(id) {
        return HTTP.get(`http://localhost:8080/api/${id}`);
    },
    createTravel(values) {
        let data= new FormData();
        data.append("startdestination",values.start_destination);
        data.append("enddestination",values.end_destination);
        data.append("price",values.price);
        return HTTP.post('http://localhost:8080/api/createtravel', data);
    }
}