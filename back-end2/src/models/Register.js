import { Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

const orderRegister = new Schema({
    nombres: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contra: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }

},{
    timestamps : true,
    versionKey: false
})

orderRegister.statics.encryptPassword = async (contra)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(contra, salt)
}

orderRegister.statics.comparePassword = async (contra, contraRecivida)=>{
    return await bcrypt.compare(contra, contraRecivida)
}

export default model('Register', orderRegister)