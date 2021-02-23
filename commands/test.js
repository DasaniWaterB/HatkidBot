const Discord = require("discord.js");
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const superagent = require("superagent");
const prefix = botconfig.prefix

const settings = {
    prefix: '/',
    token: 'YOURTOKEN'
}

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["ADMINISTRATOR"]) || !message.guild.owner) return message.channel.send("No");
    
    message.reply('Yes.')
}
module.exports.config = {
    name: "amigod",
    description: "Shows your pon balance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["dlxp", "dexp"]
}