const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("The Snatcher is a character in A Hat in Time that appears in Chapter 3. He is a mysterious shadow spirit who lives in the Subcon Forest, laying traps for unsuspecting 'fools' to walk into. Hat Kid can only access areas of the forest that is his home if she signs a contract with him.")
}

module.exports.config = {
    name: "snatcher",
    aliases: ["Hk"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}