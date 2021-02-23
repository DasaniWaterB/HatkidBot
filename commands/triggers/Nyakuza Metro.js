const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Nyakuza Metro is the second DLC and 7th chapter for A Hat in Time that places Hat Kid in the service of a crime lord known as The Empress and her jewel business. The new area can be found in the Storage Room, which is accessed from the Science Lab in the basement after collecting 20 time pieces. It is a free roaming chapter where Hat Kid will explore the Metro to find Time Pieces, Flairs, Dyes, Costumes and several other collectables. Nyakuza Metro is a very large level, akin to the other free-roam level Alpine Skyline, is broken up in several areas which are interconnected by a central hub with distinctions of where the player is by visual cues.")
}

module.exports.config = {
  name: "nyakuza",
  aliases: ["NM"],
  usage: "/usage",
  description: "Send a description of A Hat In Time",
  accesablebly: "Members"
}