const User = require('../models/user.model')
const crypt = require('bcryptjs')


const createUserService = async (request, response) => {
    // Un objeto de usuario me llega en el body de la request -> Objeto JS
    const newUser = request.body // -> Se encuentra el usuario en cuestion

    // Yo quiero, tomar ese objeto, prepararlo para poder insertarlo en la DB.
    try {
        const encodedPassword = crypt.hashSync(newUser.password)

        newUser.password = encodedPassword;

        // newUser -> Objeto en JS -> Objeto Mongo -> User(newUser)
        const newUserEncoded = new User(newUser)

        await newUserEncoded.save()

        return { message: "Usuario creado con exito", statusCode: 201}        
    } catch (error) {
        return { message: "Ocurrio un error", statusCode: 400}       
    }
}

module.exports = {
    createUserService
}