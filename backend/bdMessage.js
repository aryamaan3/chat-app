import mongoose from 'mongoose'

//crée la structure
const chatSchema = mongoose.Schema({
    message: String, 
    name: String, 
    recu: Boolean, 
});

export default mongoose.model('contenuMessage', chatSchema)