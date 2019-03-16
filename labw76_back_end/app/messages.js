const express = require('express');
const db = require('../fileDb');
const nanoid = require("nanoid");

const router = express.Router();


router.get('/messages', (req, res) => {

        console.log('begining of req.query ', req.query);
    if (Object.keys(req.query).length !== 0) {

        const date = new Date(req.query.dateTime);
        console.log('console.log datetime from frontend ', date);

        if (isNaN(date.getDate())) {
            res.status(400).send();
        } else {
            let arr = db.getMessages();
            arr = arr.filter(item=>item.dateTime > req.body.datetime);
            res.send(arr);
        }
    } else {
        let arr = db.getMessages();
        arr = arr.splice(arr.length-30, 30);
        res.send(arr);
    }


});

router.post('/messages', (req, res) => {
    if (req.body.author  !== '' && req.body.message !== '') {
    console.log('console.log req body ', req.body);
    const newMessage = {...req.body, "id": nanoid(), "dateTime": new Date().toISOString()};
    db.addMessage(newMessage);
    res.send(newMessage);
    } else {
        res.status(400).send('Cooooooool');
    }
});


// export default router
module.exports = router;
