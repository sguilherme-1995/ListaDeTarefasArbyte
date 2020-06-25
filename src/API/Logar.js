// import axios from 'axios'
const axios = require('axios')
const loginUsuario = () => {
    axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login', {
        email: 'gs@gmail.com'
    })
       .then((res) => {
            const {token} = res.data 
            // console.log(token)
        })
}
loginUsuario()