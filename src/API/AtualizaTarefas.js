// import reducer from './../reducers/reducer'
// import axios from 'axios'
const axios = require('axios')


atualizaTarefa = ( token) => {
      axios({
        method: 'put',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/6`,
        data: {
            completed: true
        },
        headers: {'Authorization': token}
      }).then(function (response) {
        console.log(response.data);
      })
}
var p = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU5MzAzOTA1OX0.M7A_BLnIIo5mXZT14KcPq1bNHXYR0KuSOpFeLs5otlk'
atualizaTarefa(p)