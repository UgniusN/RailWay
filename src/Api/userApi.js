import HTTP from './'

export default {
    getUser() {
        return HTTP.get('/api/user')
    },

    createUser(values) {
        let data= new FormData();
        data.append("username",values.username);
        data.append("password",values.password);
        data.append("name",values.name);
        data.append("lastname",values.lastname);
        data.append("email",values.email);
        data.append("Country",values.country);
        return HTTP.post('http://localhost:8080/api/user/createuser', data);
    }
    
}