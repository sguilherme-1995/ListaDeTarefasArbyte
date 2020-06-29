const axios = require('axios')


export default atualizaTarefa = (token, id, check) => {
      return axios({
        method: 'put',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        data: {
            completed: !check,
        },
        headers: {'Authorization': `Bearer ${token}`}
      })
}
