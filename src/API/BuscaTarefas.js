// import reducer from './../reducers/reducer'
// import axios from 'axios'
const axios = require('axios')


cadastrarTarefa = ( token) => {
      axios({
        method: 'get',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks`,
        
        headers: {'Authorization': token}
      }).then(function (response) {
        console.log(response.data);
      })
}
var p = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU5MzAzOTA1OX0.M7A_BLnIIo5mXZT14KcPq1bNHXYR0KuSOpFeLs5otlk'
cadastrarTarefa(p)