import Register from '../models/Register'
import jwt from 'jsonwebtoken'
import CONFIG from '../config.json'

export const newRegister = async (req, res)=>{
    try {
        const {nombres, usuario, contra, correo} = req.body
        const newRegister = new Register({
            nombres: nombres,
            usuario: usuario,
            contra: await Register.encryptPassword(contra),
            correo: correo
        })
        const savedUser = await newRegister.save()

        const token = jwt.sign({id: savedUser._id}, CONFIG.SECRET,{
            expiresIn: 86400
        })

        console.log(newRegister)
        res.json({message: 'Usuario Registrado', token})
    } catch (error) {
        res.status(500).json({message: error.message || "Algo fallo al intentar registrar tu usuario"})
    } 
}

export const findAllOrders = async (req, res)=>{
    try {
        const register = await Register.find()
        res.json(register)
    } catch (error) {
        res.status(500).json({message:"Algo fallo al intentar buscar tu orden de recogida de pedido"})
    }
    
}

export const singIn = async (req, res)=>{
    try {
        if(!req.body.contra) return res.status(400).json({
                message: "Campo password obligatorio"})
        
        const userFound = await User.findOne({
                usuario: req.body.usuario})
        
        if (!userFound) return res.status(404).json({
                message: "Usuario no existe, registrelo"})
        
        const matchPassword = await Register.comparePassword(req.body.contra, userFound.contra)
        
        if(!matchPassword) return res.status(401).json({
                message: "Contraseña invalida - Sin autorizacion"})
        
        const token = jwt.sign({id: userFound._id}, CONFIG.SECRET,{
            expiresIn: 86400
        })
        res.status(200).json({
            message: "inicio de sesion exitoso",
            token})
    } catch (error) {
        res.status(500).json({message: "ocurrio un error inesperado al intentar iniciar sesion"})
    }
}