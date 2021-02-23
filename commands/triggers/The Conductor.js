const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("The Conductor is a major character in A Hat in Time who mainly appears in Chapter 2: Battle of the Birds. He is a movie director who creates western based films, and has Hat Kid star in two films called 'Murder on the Owl Express' and 'Train Rush'. As his name suggests, he also conducts a train called The Owl Express. Having a rivalry with DJ Grooves, he's one of the two birds whom Hat Kid can help win the competition for the Annual Bird Movie Awards.")
}

module.exports.config = {
    name: "theconductor",
    aliases: ["TC"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}