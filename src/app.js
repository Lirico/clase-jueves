require('dotenv').config() // config() -> las variables de entorno de hoja env
const server = require('./server/server')
require('./db/config')

// Puerto -> Configurar el puerto -> De donde me lo traigo?

const PORT = process.env.PORT;

// Listen del server -> Puerto
// Para poder escuchar es necesario tener un server
server.listen(PORT, () => console.log("Server funcionando"))