// import
import express from 'express'
import mongoose from 'mongoose'
import Message from './bdMessage.js'

//config
const app = express()
const port = process.env.PORT || 9000

// mediateur, convertis json
app.use(express.json())


//bd config 
const conUrl = 'mongodb+srv://admin:vSKG59Adg2Ww5Fy8@cluster0.2zmz7.mongodb.net/chatappbd?retryWrites=true&w=majority'
mongoose.connect(conUrl, {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
})


// 


// requetes
app.get('/', (req, res) => res.status(200).send('Hello World'))

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
