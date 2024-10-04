const express = require('express');
const { check } = require('express-validator')
const userRouter = express.Router();
const { createUserController } = require('../controller/userController')

userRouter.get('/saludar', (request, response) => {
    response.send('Hola desde ruta de prueba')
})

userRouter.post('/', 
    // check("email")
    //     .isEmail() // Contrastar el formato del mail -> Con muchos patrones
    //     .withMessage("Debe ser una direccion de correo electronico valida"),
    // check("age")
    //     .isInt({ min: 18 })
    //     .withMessage("Debes ser mayor de 18 años."),
    // check("password")
    //     .isLength({ min: 8, max: 20})
    //     .withMessage("No debe tener menos de 8 caracteres ni mas de 20 caracteres.")
    //     .matches(/\d/) // Expresion regular -> Es un conjunto de caracteres y banderitas
    //     .withMessage("La contraseña debe contener al menos un numero"),
    createUserController)

module.exports = userRouter;

