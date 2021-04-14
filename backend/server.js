import express from 'express'
const env = require('dotenv')
import mongoose from 'mongoose'
import Message from './bdMessage.js' //model
import Pusher from "pusher" //socket
import cors from "cors"
import config from "./config.js" // omis pour des raisons de securité


//config
const app = express()
const port = process.env.PORT || 9000 //good practice

const pusherKey = config.PUSHER_KEY
const pusherSecret = config.PUSHER_SECRET
const mongoKey = config.MONGO_KEY

const pusher = new Pusher({
    appId: "1176582",
    key: pusherKey,
    secret: pusherSecret,
    cluster: "eu",
    useTLS: true
  });

// mediateur, convertis json
app.use(express.json())
app.use(cors()) //coresspond au principe cors des navigateurs


//bd config 
mongoose.connect(mongoKey, {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}) //TODO gerer le reject du promise

const bd = mongoose.connection
bd.once('open', () => { //connection établie
    console.log("connecté");

    const recepteurMessage = bd.collection("contenumessages")
    const changeStream = recepteurMessage.watch()  //ecoute la collection "contenumessages"

    changeStream.on('change', (change) =>{ //lors d'une modif
        console.log("changement " + change);

        if (change.operationType === 'insert'){ //si ajout dans la bd
            const detailsMessage = change.fullDocument;
            pusher.trigger('messages', 'inserted',  //envoi à tous les clients connecté à ce socket
            //https://github.com/pusher/pusher-js
            {
                name: detailsMessage.name, 
                message: detailsMessage.message, 
                recu: detailsMessage.recu
            })
        }
        else{
            console.log("error pusher trigger ")
        }
    })
})


// 


// requetes api

app.get('/message/sync', (req, res) =>{
    Message.find((err, data) => {
        if (err){
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/message/new', (req, res) =>{
    const bdMessage = req.body

    Message.create(bdMessage, (err, data) =>{
        if (err){
            res.status(500).send(err + "test")
        }
        else{
            res.status(201).send('message crée : ' + data)
        }
    })
})

//listener
app.listen(port, () => console.log('ecoute localhost: ' + port))
