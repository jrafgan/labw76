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
    getMessages() {
        return messages;
    },
    addMessage(item) {
        messages.push(item);
        this.save();
    },
    save() {
        fs.writeFileSync(filename, JSON.stringify(messages, null, 2));
    }
};