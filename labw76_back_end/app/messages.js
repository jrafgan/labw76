const express = require('express');
const db = require('../fileDb');
const nanoid = require("nanoid");

const router = express.Router();


router.get('/messages', (req, res) => {
    res.send(db.getItems());
});

router.get('/messages:id', (req, res) => {
    res.send('A single product by Id will be here');
});

router.post('/', (req, res) => {
    const product=req.body;
    product.id = nanoid();
    db.addItem(req.body);
    res.send({message: 'OK'});
});


// export default router
module.exports = router;
