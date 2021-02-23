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
        if (message.mentions.users.first()) {
     
          var output = await eco.Leaderboard({
            filter: x => x.balance > 50,
            search: message.mentions.users.first().id
          })
          message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);
     
        } else {
     
          eco.Leaderboard({
            limit: 3,
            filter: x => x.balance > 50
          }).then(async users => {
     
            if (users[0]) var firstplace = await bot.user.fetch(users[0].userid)
            if (users[1]) var secondplace = await bot.user.fetch(users[1].userid) 
            if (users[2]) var thirdplace = await bot.user.fetch(users[2].userid) 
            if (users[3]) var forthplace = await bot.user.fetch(users[3].userid) 
            if (users[4]) var fifthplace = await bot.user.fetch(users[4].userid) 
            if (users[5]) var sixthplace = await bot.user.fetch(users[5].userid) 
            if (users[6]) var seventhplace = await bot.user.fetch(users[6].userid) 
            if (users[7]) var eighthplace = await bot.user.fetch(users[7].userid)
            if (users[8]) var ninthplace = await bot.user.fetch(users[8].userid) 
            if (users[9]) var tenthplace = await bot.user.fetch(users[9].userid) 
     
            message.channel.send(`My leaderboard:
     
    1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
    2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
    3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}
    4 - ${forthplace && forthplace.tag || 'Nobody Yet'} : ${users[3] && users[3].balance || 'None'}
    5 - ${fifthplace && fifthplace.tag || 'Nobody Yet'} : ${users[4] && users[4].balance || 'None'}
    6 - ${sixthplace && sixthplace.tag || 'Nobody Yet'} : ${users[5] && users[5].balance || 'None'}
    7 - ${seventhplace && seventhplace.tag || 'Nobody Yet'} : ${users[6] && users[6].balance || 'None'}
    8 - ${eighthplace && eighthplace.tag || 'Nobody Yet'} : ${users[7] && users[7].balance || 'None'}
    9 - ${ninthplace && ninthplace.tag || 'Nobody Yet'} : ${users[8] && users[8].balance || 'None'}
    10 - ${tenthplace && tenthplace.tag || 'Nobody Yet'} : ${users[9] && users[9].balance || 'None'}`)
          })
        }
      }

module.exports.config = {
    name: "leaderboardeco",
    description: "Shows who has the most amount of money on the server.",
    usage: "/",
    accessableby: "Members",
    aliases: ["le", "lb"]
}