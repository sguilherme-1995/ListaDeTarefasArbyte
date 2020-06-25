// import axios from 'axios'
const axios = require('axios')
const cadastrarUsuario = () => {

    axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
        "fullName": "Guilherme de Souza",
        "email": 'gs@gmail.com'
    })
        .then((res) => {
            console.log(res.data)
        })
}
cadastrarUsuario()