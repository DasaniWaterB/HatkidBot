const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Seal the Deal is the first DLC for A Hat in Time. It was released for PCs on September 13, 2018 and Nintendo Switch on October 18, 2019. There is no current date for the Xbox and PlayStation release, however. Seal the Deal adds many new customization options, such as new flairs, dyes, badges, camera filters and introduced new outfits for Hat Kid to wear. They can be unlocked in the Death Wish Mode. Death Wish Mode is a new challenge mode with more difficult stages, bosses, time rifts and may have other challenges as well. There are a total of 111 challenges to overcome. Clearing challenges provides customization rewards.")
}

module.exports.config = {
    name: "sealthedeal",
    aliases: ["STD"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}