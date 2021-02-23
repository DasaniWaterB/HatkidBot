const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    let Sembed = new Discord.MessageEmbed()
    .setColor(colours.purple)
    .setAuthor(`These are the A Hat In Time .`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`These are all the Spotify soundtracks.`)
    .addField('Spotify Soundtrack A:', "``https://open.spotify.com/album/2HrVkjNMJVNcjUSWxUzyCR?si=SBNxtnGNT0Wv9vPR7Vve_g.``")
    .addField('Spotify Soundtrack B:', "``https://open.spotify.com/album/46JpMXPZYvtGuuyI56qssd?si=1R7eXj8rQwCd5fEiJ1iaBw``")
    .addField('Seal The Deal + Nyakuza Metro Spotify Soundtrack:', "``https://open.spotify.com/album/7oPmMMzc0ESIpL0XGbJuIO?si=lIQuPPZ2RxSFYBrzI9z8Vw``")
    .addField('Your Contract Has Expired with lyrics:', "``https://www.youtube.com/watch?v=fmz1p0U_sPk&frags=pl%2Cwn``")
    .setFooter("Hatkid", bot.user.displayAvatarURL)
    message.channel.send(Sembed)
}

module.exports.config = {
    name: "soundtracks",
    aliases: ["Sdtk"],
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}