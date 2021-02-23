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
        var flip = args[0]
        var amount = args[1]
     
        if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
        if (!amount) return message.reply('Specify the amount you want to gamble!')
     
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply('You have fewer pons than the amount you want to gamble!')
     
        var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
        message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
}

module.exports.config = {
    name: "coinflip",
    description: "Test your luck with a 50/50 chance to earn some cash, as Hat Kid is a supporter of gambling.",
    usage: "/",
    accessableby: "Members",
    aliases: ["co", "cf"]
}