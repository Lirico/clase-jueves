const express = require('express');
const userRouter = require('../routes/userRouter')
const server = express();

server.use(express.json())

// El router se ejecuta aca, pero se configura en routes
server.use('/api/user', userRouter) 


module.exports = server;