const express = require('express');
const db = require('./fileDb');
const messages = require('./app/messages');
const cors = require('cors');

db.init();

const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

app.use('/messages', messages);

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});