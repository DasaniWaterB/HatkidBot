const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Mustache Girl (məsˈtɑːʃ gɜːl) is the main antagonist in A Hat in Time. Her goal is to get all of the Time Pieces before her former best friend turned enemy Hat Kid can, so she can use their power to fight 'evil'.")
}

module.exports.config = {
    name: "mustachegirl",
    aliases: ["MG"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}