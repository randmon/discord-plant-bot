//help command
module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Help!',
    execute(client, cmd, message, args, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('#25e859')
            .setTitle('Help')
            .setDescription('**-help** - Show this message');

        client.commands.sort().filter(c => c.name !== 'help').forEach(command => {
            embed.addField(command.name, command.description);
        });
        message.channel.send({ embeds: [embed] });
    }
};