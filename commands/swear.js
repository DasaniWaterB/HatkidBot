const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Peck you, you pecking little peck, I swear to pecking peck I will peck you so hard until your body is nothing but a pile of pecked up peck, you little pecker pecker.")
}

module.exports.config = {
  name: "swear",
  aliases: ["SR"],
  usage: "/usage",
  description: "Send a description of A Hat In Time",
  accesablebly: "Members"
}