const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("C.A.W Agents are anthropomorphic crows who are part of an organization called C.A.W: The Crow Agent Watch. They appear primarily in Murder on the Owl Express, where Hat Kid must sneak past them in order to gather evidence on the murder.")
}

module.exports.config = {
    name: "caw",
    aliases: ["CAW"],
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}