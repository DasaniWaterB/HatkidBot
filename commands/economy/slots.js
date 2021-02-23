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
    var amount = args[0]
     
    if (!amount) return message.reply('Specify the amount you want to gamble!')
     
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer pons than the amount you want to gamble!')
     
    var gamble = await eco.Slots(message.author.id, amount, {
    width: 3,
    height: 3
   }).catch(console.error)
    message.channel.send(gamble.grid)
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
}

module.exports.config = {
    name: "slots",
    description: "Test your luck and try to win some nice cash prizes, as Hat Kid is a supporter of gambling.",
    usage: "/",
    accessableby: "Members",
    aliases: ["sl", "sos"]
}