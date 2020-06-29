const axios = require('axios')


export default cadastrarTarefa = ( desc, token) => {
      return axios({
        method: 'post',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks`,
        data: {
            description: desc,
            completed: false
        },
        headers: {'Authorization': `Bearer ${token}`}
      })
      .then(res => {
        return res.data
      })
}
