const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
var parseArgs = require('minimist')
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    let Sembed = new Discord.MessageEmbed()
    .setColor(colours.purple)
    .setAuthor(`Links`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`These are the platform links for A Hat In Time`)
    .addField('Nintendo (Supports Switch):', "``https://www.nintendo.com/games/detail/a-hat-in-time-switch/#:~:text=A%20Hat%20in%20Time%20is,scattered%20across%20a%20nearby%20planet.``")
    .addField('Playstation (Supports Playstation 4):', "``https://store.playstation.com/en-nz/product/EP3717-CUSA10028_00-AHATINTIMEPS4000``")
    .addField('Xbox (Supports Xbox One):', "``https://www.microsoft.com/en-us/p/a-hat-in-time/bx91dhsr4c5t``")
    .addField('Steam (Supports Mac and Windows):', "``https://store.steampowered.com/app/253230/A_Hat_in_Time/``")
    .setFooter("Hatkid", bot.user.displayAvatarURL)
    message.channel.send(Sembed)
}

module.exports.config = {
    name: "links",
    aliases: ["Lks"],
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}