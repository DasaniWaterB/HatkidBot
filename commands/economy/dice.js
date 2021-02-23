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
        var roll = args[0]
        var amount = args[1]
     
        if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('Specify the roll, it should be a number between 1-6')
        if (!amount) return message.reply('Specify the amount you want to gamble!')
     
        var output = eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply('You have fewer pons than the amount you want to gamble!')
     
        var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
        message.reply(`The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`)
}

module.exports.config = {
    name: "dice",
    description: "Gives you an allowance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["di", "dc"]
}