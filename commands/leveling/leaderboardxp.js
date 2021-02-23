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
    if (message.mentions.users.first()) {
        var output = await leveling.Leaderboard({
          search: message.mentions.users.first().i
        })
        message.channel.send(`${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`)
   
        //Searches for the top 3 and outputs it to the user.
      } else {
   
        leveling.Leaderboard({
          limit: 10 //Only takes top 3 ( Totally Optional )
        }).then(async users => { //make sure it is async
   
          if (users[0]) var firstplace = await bot.users.fetch(users[0].userid) //Searches for the user object in discord for first place
          if (users[1]) var secondplace = await bot.users.fetch(users[1].userid) //Searches for the user object in discord for second place
          if (users[2]) var thirdplace = await bot.users.fetch(users[2].userid) //Searches for the user object in discord for third place
          if (users[3]) var fourthplace = await bot.users.fetch(users[3].userid) //Searches for the user object in discord for first place
          if (users[4]) var fifthplace = await bot.users.fetch(users[4].userid) //Searches for the user object in discord for second place
          if (users[5]) var sixthplace = await bot.users.fetch(users[5].userid) //Searches for the user object in discord for third place
          if (users[6]) var seventhplace = await bot.users.fetch(users[6].userid) //Searches for the user object in discord for first place
          if (users[7]) var eighthplace = await bot.users.fetch(users[7].userid) //Searches for the user object in discord for second place
          if (users[8]) var ninthplace = await bot.users.fetch(users[8].userid) //Searches for the user object in discord for third place
          if (users[9]) var tenthplace = await bot.users.fetch(users[9].userid) //Searches for the user object in discord for third place

          message.channel.send(`My leaderboard:
   
            1 - ${firstplace && firstplace.tag || 'Nobody Yet'}: Level: ${users[0] && users[0].level || 'None'} XP: ${users[0] && users[0].xp || 'None'}
            2 - ${secondplace && secondplace.tag || 'Nobody Yet'}: Level: ${users[1] && users[1].level || 'None'} XP: ${users[1] && users[1].xp || 'None'}
            3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'}: Level: ${users[2] && users[2].level || 'None'} XP: ${users[2] && users[2].xp || 'None'}
            4 - ${fourthplace && fourthplace.tag || 'Nobody Yet'}: Level: ${users[3] && users[3].level || 'None'} XP: ${users[3] && users[3].xp || 'None'}
            5 - ${fifthplace && fifthplace.tag || 'Nobody Yet'}: Level: ${users[4] && users[4].level || 'None'} XP: ${users[4] && users[4].xp || 'None'}
            6 - ${sixthplace && sixthplace.tag || 'Nobody Yet'}: Level: ${users[5] && users[5].level || 'None'} XP: ${users[5] && users[5].xp || 'None'}
            7 - ${seventhplace && seventhplace.tag || 'Nobody Yet'}: Level: ${users[6] && users[6].level || 'None'} XP: ${users[6] && users[6].xp || 'None'}
            8 - ${eighthplace && eighthplace.tag || 'Nobody Yet'}: Level: ${users[7] && users[7].level || 'None'} XP: ${users[7] && users[7].xp || 'None'}
            9 - ${ninthplace && ninthplace.tag || 'Nobody Yet'}: Level: ${users[8] && users[8].level || 'None'} XP: ${users[8] && users[8].xp || 'None'}
            10 - ${tenthplace && tenthplace.tag || 'Nobody Yet'}: Level: ${users[9] && users[9].level || 'None'} XP: ${users[9] && users[9].xp || 'None'}`)
   
        })
    }
}
module.exports.config = {
    name: "leaderboardxp",
    description: "Shows your pon balance.",
    usage: "/",
    accessableby: "Members",
    aliases: ["bal", "b"]
}