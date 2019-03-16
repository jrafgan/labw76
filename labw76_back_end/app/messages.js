const express = require('express');
const db = require('../fileDb');
const nanoid = require("nanoid");

const router = express.Router();


router.get('/messages', (req, res) => {
    console.log(nanoid());
    console.log(req.query);
    if (Object.keys(req.query).length !== 0) {
        const date = new Date(req.query.datetime);
        console.log('date typeof is ', typeof (date));
        if (isNaN(date.getDate())) {
            console.log(res.status(400).send('Wrong dateTime requested'))
        } else {
            let arr = db.getMessages();
            //arr.splice(-30);
            res.send(arr);
        }
    } else {
        let arr = db.getMessages();
        //arr.splice(-30);
        res.send(arr);
    }


});

router.post('/messages', (req, res) => {
    const newMessage = {...req.body, "id": nanoid(), "dateTime": new Date().toISOString()};
    db.addMessage(newMessage);
    res.send(newMessage);
});


// export default router
module.exports = router;
