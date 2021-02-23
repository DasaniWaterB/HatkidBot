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
        var output = await eco.Work(message.author.id)
        if (output.earned == 0) return message.reply('you tried crossing subcon swamp but was too slow and got dragged down into its depths')
     
        var output = await eco.Work(message.author.id)
        if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
        message.channel.send(`${message.author.username}
    You've \` Obtainined an hour glass \` and earned  ${output.earned} pons, as well as a time capsule.
    You now own ${output.balance} pons`)
     
     
        var output = await eco.Work(message.author.id, {
          failurerate: 50,
          money: Math.floor(Math.random() * 500),
          jobs: ['Obtainined an hour glass']
        })
        
        if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
     
        message.channel.send(`${message.author.username}
        You've \` ${output.job} \` and earned ${output.earned} pons
    You now own ${output.balance} pons`)
}

module.exports.config = {
    name: "work",
    description: "Gives you an allowance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["wk", "wo"]
}