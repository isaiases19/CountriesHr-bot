// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', async msg => {


    //Republiac Dominicana
    contesta(msg, 'rd', 'es', '🇩🇴', '🇪🇸', -4, 2);
    contesta(msg, 'rd', 'us', '🇩🇴', '🇺🇸', -4, -4);
    contesta(msg, 'rd', 'ar', '🇩🇴', '🇦🇷', -4, -3);
    contesta(msg, 'rd', 'mx', '🇩🇴', '🇲🇽', -4, -5);

    //USA
    contesta(msg, 'us', 'es', '🇺🇸', '🇪🇸', -4, 2);
    contesta(msg, 'us', 'ar', '🇺🇸', '🇦🇷', -4, -3);
    contesta(msg, 'us', 'mx', '🇺🇸', '🇲🇽', -4, -5);

    //Espana
    contesta(msg, 'es', 'ar', '🇪🇸', '🇦🇷', 2, -3);
    contesta(msg, 'mx', 'es', '🇲🇽', '🇪🇸', -5, 2);

    //Argentina
    contesta(msg, 'ar', 'mx', '🇲🇽', '🇦🇷', -5, -3);

    if (msg.content === 'hola') {
        msg.reply('hola! ' + msg.author.username);
    }
    if (msg.content === '!cls') {
        const msgS = await msg.channel.messages.fetch();

        msg.channel.bulkDelete(msgS);
    }

});


function contesta(msg, pais1, pais2, name1, name2, offset1, offset2) {
    if (msg.content === pais1 + '-' + pais2 || msg.content === pais2 + '-' + pais1) {
        const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('La Hora es:')
            // Set the color of the embed
            .setColor("RED")
            // Set the main content of the embed
            .setDescription(calcTime(name1, offset1) + " || " + calcTime(name2, offset2));

        // Send the embed to the same channel as the message
        msg.channel.send(embed);



    }
}

//calcula time
function calcTime(city, offset) {

    // create Date object for current location
    var d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return city + " " + nd.toLocaleString();
}

client.login('NzU1MTExMDgwNzExMTU5OTY4.X1-h_g.u4x8C784eF-cqWX8KRYKCAvX3_Y');