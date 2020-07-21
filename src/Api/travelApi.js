import HTTP from '.'

export default {
    fetchTravels() {
        return HTTP.get('http://localhost:8080/api/getall')
    },

    async fetchTravelById(id) {
        return await HTTP.get(`http://localhost:8080/api/${id}`);
    },
    createTravel(values,date) {
        let data= new FormData();
        data.append("startdestination",values.start_destination);
        data.append("enddestination",values.end_destination);
        data.append("price",values.price);
        data.append("date",date)
        return HTTP.post('http://localhost:8080/api/createtravel', data);
    },

    editTravel(values,date,id) {
        let data = new FormData();
        data.append("startdestination",values.start_destination);
        data.append("enddestination",values.end_destination);
        data.append("price",values.price);
        data.append("date",date)
        data.append("id",id)
        return HTTP.post('http://localhost:8080/api/updatetravel', data);
    },

    deleteTravel(id) {
        let data = new FormData();
        data.append("id",id)
        return HTTP.post('http://localhost:8080/api/deletetravel',data)
    }
}