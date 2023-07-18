const express = require('express');
const App = express();
const Route = require('./route');


App.use(express.json());


App.use('/IOTroute',Route);


App.listen(3001,()=>{
    console.log('your port is running on port 3001')
})