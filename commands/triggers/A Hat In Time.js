const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
var parseArgs = require('minimist')
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who stitches hats for wicked powers. In A Hat in Time you play as a tiny space-travelling girl with a big tophat. Her adventure is halted when all her fuel, the Time Pieces, is lost and scattered across a nearby planet. Genre: Platformer, Adventure, Action. Release date: Oct 5, 2017. Developer: Gears for Breakfast")
}

module.exports.config = {
    name: "ahatintime",
    aliases: ["AHIT"],
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}