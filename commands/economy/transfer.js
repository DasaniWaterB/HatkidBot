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
        var amount = args[1]
     
        if (!user) return message.reply('Reply the user you want to send pons to!')
        if (!amount) return message.reply('Specify the amount you want to pay!')
     
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply('You have fewer pons than the amount you want to transfer!')
     
        var transfer = await eco.Transfer(message.author.id, user.id, amount)
        message.reply(`Transfering pons successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
}

module.exports.config = {
    name: "transfer",
    description: "Donate your money to another user.",
    usage: "/",
    accessableby: "Members",
    aliases: ["tr", "tf"]
}
