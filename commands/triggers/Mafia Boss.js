const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("The Mafia Boss (mæfɪə bɒs) is the leader of the Mafia of Cooks, ruler of Mafia Town, and the second boss in A Hat In Time. He is found in the throne room of Mafia HQ, and is fought in the HQ's theater. His face can be found drawn on various walls in Mafia Town, sometimes vandalized, presumably by Mustache Girl.")
}

module.exports.config = {
    name: "mafiaboss",
    aliases: ["MB"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}