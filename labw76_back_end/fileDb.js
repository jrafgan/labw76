const fs = require('fs');
const filename = './db.json';

let messages = [];

module.exports = {
    init() {
        try {
            const fileContents = fs.readFileSync(filename);
            messages = JSON.parse(fileContents);
        } catch (e) {
            messages = [];
        }
    },
    get30Messages() {
        let messagesArr=[];
        const messages30 = messages.map((item, ndx)=>{
            if (ndx >= messages.length - 30) {
                messagesArr.push(item);
            }
        });
        return messagesArr;
    },
    addMessage(newMessage) {
        messages.push(newMessage);
        this.save();
    },
    save() {
        fs.writeFileSync(filename, JSON.stringify(messages, null, 2));
    }
};