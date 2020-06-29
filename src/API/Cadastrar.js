// import axios from 'axios'
const axios = require('axios')
export default cadastrarUsuario = (nome, email) => {

     return axios.post(' https://arbyte-todo-list-api.herokuapp.com/users',{
        "fullName": nome,
        "email": email
    })
    .then(resposta => {
        return resposta.data
    }).catch(err => {console.log('catch', err)})
       
}
// cadastrarUsuario()