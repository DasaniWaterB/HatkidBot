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
    var user = message.mentions.users.first() || message.author
 
    var output = await leveling.Fetch(user.id)
    message.channel.send(`Hey ${user.tag}! Your at level ${output.level} with ${output.xp} xp!`);
}

module.exports.config = {
    name: "profile",
    description: "Shows your pon balance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["pf", "pr"]
}