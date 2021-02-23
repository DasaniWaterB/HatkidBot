const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Mafia Goons are enemies in A Hat in Time, serving as the primary enemy type in Mafia Town across all of the Acts of Chapter 1, acting underneath the order of their leader, Mafia Boss. Mafia Town is both the first chapter and first location visited in A Hat In Time. The city was taken over by the mafia and converted into a host for their Seafood Restaurant. Dominating the mafia skyline is the Mafia's Headquarters, built on the giant geyser in the center of the island.")
}

module.exports.config = {
    name: "mafia",
    aliases: ["MA"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}