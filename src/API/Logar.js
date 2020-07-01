const axios = require('axios')
export default loginUsuario = (email) => {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login', {
        email: email
    })
    .then(res => {
        return res.data
    }).catch(err => {console.log("Erro ao Logar", err)})
    }

