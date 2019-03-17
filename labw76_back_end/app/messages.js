const express = require('express');
const db = require('../fileDb');
const nanoid = require("nanoid");

const router = express.Router();


router.get('/messages', (req, res) => {

    console.log('begining of line 10 ', req.query.dateTime);
    const date = req.query.dateTime;
    if (Object.keys(req.query).length !== 0) {
        const date2 = new Date(req.query.dateTime);
        if (isNaN(date2.getDate()) && req.query.dateTime === '') {
            console.log('console.log incorrect datetime ', date2);
            res.status(400).send();
        } else {
            console.log('console.log datetime is ok ', date);
            const arr = db.get30Messages();
            const arr2 = arr.filter(item=>item.dateTime > date);
            console.log('console.log item.datetime is ok ', arr2);
            res.send(arr2);
        }

    } else {
        console.log('console.log no datetime in query params', date);
        const arr = db.get30Messages();
        console.log('Messages arr', arr);
        res.send(arr);
    }
});

router.post('/messages', (req, res) => {
    if (req.body.author !== '' && req.body.message !== '') {
        console.log('console.log req body ', req.body);
        const newMessage = {...req.body, "id": nanoid(), "dateTime": new Date().toISOString()};
        db.addMessage(newMessage);
        res.send(newMessage);
    } else {
        res.status(400).send();
    }
});


// export default router
module.exports = router;
