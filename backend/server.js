// import
import express from 'express'
import mongoose from 'mongoose'
import Message from './bdMessage.js'
import Pusher from "pusher"
import cors from "cors"

//config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1176582",
    key: "0c7f1c2bbfdfc2276821",
    secret: "548eab68ea142f35e39a",
    cluster: "eu",
    useTLS: true
  });

// mediateur, convertis json
app.use(express.json())
app.use(cors()) //accepte tout les endpoint


//bd config 
const conUrl = 'mongodb+srv://admin:vSKG59Adg2Ww5Fy8@cluster0.2zmz7.mongodb.net/chatappbd?retryWrites=true&w=majority'
mongoose.connect(conUrl, {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const bd = mongoose.connection
bd.once('open', () => {
    console.log("connecté");

    const recepteurMessage = bd.collection("contenumessages")
    const changeStream = recepteurMessage.watch() 

    changeStream.on('change', (change) =>{
        console.log("changement " + change);

        if (change.operationType === 'insert'){
            const detailsMessage = change.fullDocument;
            pusher.trigger('messages', 'inserted', 
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
