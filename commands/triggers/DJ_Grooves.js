const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("DJ Grooves is a major character in A Hat in Time. He appears in Battle of the Birds as one of the two birds running Dead Bird Studio, the other being his rival, The Conductor. Having a rivalry with the Conductor, he's one of the two birds that Hat Kid can help win the competition for the Annual Bird Movie Awards.")
}

module.exports.config = {
    name: "DJ_Grooves",
    aliases: ["DJG"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}