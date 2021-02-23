const Discord = require("discord.js");
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const superagent = require("superagent");
var leveling = require("discord-leveling")
const prefix = botconfig.prefix

const settings = {
    prefix: '/',
    token: 'YOURTOKEN'
}

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "401892110506131498") return message.channel.send("You haven't seem to have taken my soul, so I don't have to do as you command.");

    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')
    
    var output = await leveling.Delete(user.id)
    if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
    
    message.reply('Error: Could not find the user in database.')
}
module.exports.config = {
    name: "deletexp",
    description: "Shows your pon balance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["dlxp", "dexp"]
}