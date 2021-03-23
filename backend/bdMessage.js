import mongoose from 'mongoose'

//crée la structure
const chatSchema = mongoose.Schema({
    message: String, 
    name: String, 
    recu: Boolean, 
});

//collection
export default mongoose.model('contenumessages', chatSchema)