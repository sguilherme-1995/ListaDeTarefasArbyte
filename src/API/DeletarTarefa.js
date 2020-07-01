// import reducer from './../reducers/reducer'
const axios = require('axios')

export default deletaTarefa = (token, id) => {
      return axios({
        method: 'delete',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        headers: {'Authorization': `Bearer ${token}`}
      }).catch(err =>{console.log("Falha ao Cadastrar", err)})
}
