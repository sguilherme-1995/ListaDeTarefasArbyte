const axios = require('axios')


export default editaTarefa = (token, id, desc) => {
      return axios({
        method: 'put',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        data: {
            description: desc,
        },
        headers: {'Authorization': `Bearer ${token}`}
    })
}

