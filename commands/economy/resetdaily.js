const Discord = require("discord.js");
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const superagent = require("superagent");
var eco = require("discord-economy");
const prefix = botconfig.prefix

const settings = {
    prefix: '/',
    token: 'YOURTOKEN'
}

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You do not have the requirements for this command.");
         
    var output = await eco.ResetDaily(message.author.id)
         
    message.reply(output)
}

module.exports.config = {
    name: "resetdaily",
    description: "Resets your daily time limit to recieve your daily pons.",
    usage: "/",
    accessableby: "Members",
    aliases: ["reset", "rd"]
}

