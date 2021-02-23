const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Hat Kid, the main protagonist of A Hat in Time, is a human-like alien attempting to collect the scattered Time Pieces, the fuel for her spaceship, so she can return home. She is also the first playable character, the other being Bow Kid for co-op mode. Her real name is unknown, as it's never mentioned in-game, and in the instruction manual, she is listed as Me, due to it being written entirely in first-person. She also handwrites her name as Korean-like symbols when she signs The Snatcher's contracts.")
}

module.exports.config = {
    name: "hatkid",
    aliases: ["Hk"],
    usage: "/usage",
    description: "Send a description of A Hat In Time",
    accesablebly: "Members"
}