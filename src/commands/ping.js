module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, cmd, message, args) {
        message.reply('pong!');
    }
};