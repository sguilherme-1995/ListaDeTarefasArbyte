const axios = require('axios')


export default buscaTarefa = (token) => {
      return axios({
        method: 'get',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks`,
        
        headers: {'Authorization': `Bearer ${token}`}
      }).then(res => {
        return res.data
      }).catch(err =>{console.log("Falha ao Buscar", err)})
}
