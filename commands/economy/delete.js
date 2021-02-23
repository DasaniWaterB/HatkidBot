const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const superagent = require("superagent");
var eco = require("discord-economy");
const prefix = botconfig.prefix

const settings = {
    prefix: '/',
    token: 'YOURTOKEN'
}

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')
   
    if(message.author.id != "401892110506131498") return message.reply("You haven't seem to have taken my soul, so I don't have to do as you command.")
     
    var output = await eco.Delete(user.id)
    if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')
     
    message.reply('Error: Could not find the user in database.')
}

module.exports.config = {
    name: "deleteeco",
    description: "resets yours or someone elses allowance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["de", "dt"]
}