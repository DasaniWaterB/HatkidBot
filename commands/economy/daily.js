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
          var output = await eco.Daily(message.author.id)
         
          if (output.updated) {
         
            var profile = await eco.AddToBalance(message.author.id, 100)
            message.reply(`You claimed your daily pons successfully! You now own ${profile.newbalance} pons.`);
         
        } else {
          message.channel.send(`Sorry, you already claimed your daily pons!\nBut no worries, over ${output.timetowait} you can daily again!`)
        }
}

module.exports.config = {
    name: "daily",
    description: "Gives you your daily pons.",
    usage: "/",
    accessableby: "Members",
    aliases: ["dai", "d"]
}