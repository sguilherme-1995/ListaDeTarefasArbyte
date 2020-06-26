// import reducer from './../reducers/reducer'
// import axios from 'axios'
const axios = require('axios')


export default deletaTarefa = (token, id) => {
      axios({
        method: 'delete',
        url: `https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
        headers: {'Authorization': token}
      }).then(res => {console.log("Deletada then")}).catch(err =>{console.log("Deletada catch")})
}
// var p = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTU5MzAzOTA1OX0.M7A_BLnIIo5mXZT14KcPq1bNHXYR0KuSOpFeLs5otlk'
// deletaTarefa(p)