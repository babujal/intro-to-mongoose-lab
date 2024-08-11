const Tr = require('./models/trinputs');
require('dotenv').config();
const express = require('express');

const app = express();
///////middleware//////
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/pendingstr', async (req, res) => {
    try{
        const trailers = await Tr.find({});
        res.json(trailers)
    }catch (err){
        res.status(400).json(err)
    }
});

app.post('/pendingstr', async (req, res) => {
    try{
        res.json(await Tr.create(req.body));
    }catch (err){
        res.status(400).json(err)
    }
});

app.delete('/pendingstr/:id', async (req, res) => {
    try {
       res.json(await Tr.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
});

app.put('/pendingstr/:id', async (req, res) => {
    try {
        res.json(await Tr.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`);
});