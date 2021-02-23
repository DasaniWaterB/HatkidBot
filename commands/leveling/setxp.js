const Discord = require("discord.js");
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const superagent = require("superagent");
var leveling = require('discord-leveling')
const prefix = botconfig.prefix

const settings = {
    prefix: '/',
    token: 'YOURTOKEN'
}

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "401892110506131498") return message.channel.send("You haven't seem to taken my soul so I don't have to do as you command.");

    var amount = args[0]
    var user = message.mentions.users.first() || message.author
 
    var output = await leveling.SetXp(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} xp!`);
}

module.exports.config = {
    name: "setxp",
    description: "Shows your pon balance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["sx", "stx"]
}