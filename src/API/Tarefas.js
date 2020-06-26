// import reducer from './../reducers/reducer'
// import axios from 'axios'
const axios = require('axios')


export default cadastrarTarefa = ( desc, check, token) => {
      return axios({
        method: 'post',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks`,
        data: {
            description: desc,
            completed: check
        },
        headers: {'Authorization': token}
      }).then(res => {
        return res.data.id
      })
}
// var p = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU5MzAzOTA1OX0.M7A_BLnIIo5mXZT14KcPq1bNHXYR0KuSOpFeLs5otlk'
// cadastrarTarefa(p)