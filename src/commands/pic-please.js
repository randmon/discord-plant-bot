const fs = require('fs');

module.exports = {
    name: 'pic-please',
    description: 'Get a random picture from folder',
    execute(message, args) {
        const path = './src/img/';
        const files = fs.readdirSync(path);
        const random = Math.floor(Math.random() * files.length);
        const file = files[random];
        message.channel.send({ files: [{ attachment: path + file }] });
    }
};