import HTTP from '.'

export default {
    createOrder(data) {
        let userdata= new FormData();
        userdata.append("travelid",data.travelid)
        userdata.append("userid",data.userid)
        debugger
        return HTTP.post('http://localhost:8080/api/order/createorder', userdata);
    },

    fetchUserOrders() {
        return HTTP.get('http://localhost:8080/api/order/userorders')
        debugger
    }
}