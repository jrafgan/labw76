const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const app = express();
const port = 3051;

app.use(cors());
app.use(express.json());

app.post('/messages', (req, res)=> {
    res.send('some message');
});

app.get('/messages', (req, res)=> {
    res.send('some message');
});

app.listen(port, () => {
    console.log('We"re live on http:localhost:' + port)
});