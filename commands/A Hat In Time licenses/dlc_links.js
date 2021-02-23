const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
    let Sembed = new Discord.MessageEmbed()
    .setColor(colours.purple)
    .setAuthor(`These are the platform links for A Hat In Time DLC's.`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Please note, the DLC's have not been releaed for the Xbox One or the PS4.`)
    .addField('Seal The Deal (Steam edition):', "``https://store.steampowered.com/app/787340/A_Hat_in_Time__Seal_the_Deal/.``")
    .addField('Nyakuza Metro (Steam edition):', "``https://store.steampowered.com/app/940220/A_Hat_in_Time__Nyakuza_Metro__Online_Party/``")
    .addField('Seal The Deal (Switch edition):', "``https://www.nintendo.com/games/detail/a-hat-in-time-switch/``")
    .addField('Nyakuza Metro (Switch edition):', "``https://www.nintendo.com/games/detail/a-hat-in-time-switch/``")
    .setFooter("Hatkid", bot.user.displayAvatarURL)
    message.channel.send(Sembed)
}

module.exports.config = {
    name: "dlc_links",
    aliases: ["DLCL"],
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}