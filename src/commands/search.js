const Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
        headless: true,
    }
})

module.exports = {
    name: 'search',
    aliases: ['s', 'img', 'image', 'google'],
    description: 'Search a plant image',
    async execute(client, cmd, message, args) {
        const query = args.join(' ');
        if (!query) {
            return message.channel.send('Please specify a term.');
        }
        let result = '';
        if (cmd === 'google') {
            result = await google.scrape(query);
        } else {
            result = await google.scrape("\"plant\" " + query);
        }

        if (!result.length) {
            return message.channel.send('No results found.');
        }
        const image_url = result[0].url;
        message.channel.send(image_url);
    }
}