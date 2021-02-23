const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
  message.reply("Queen Vanessa (My new and biggest fear) is an enemy encountered in A Hat in Time, as the lone living resident of Queen Vanessa's Manor at the center of Act 4 in Subcon Forest. Queen Vanessa appears as an inhumanly tall, shadowy figure whose form is comparable to constantly shifting smoke, though official artwork, the final page of the Storybook and the shadow she casts actively portray her with thin arms, long messy hair and a large hunched-over stature. The only real distinguishing of her in-game model are her eyes which ignite in a bright red glow. It is possible that Vanessa is human given the largely humanoid design provided by the Storybook. However, this has issues due to the Queen's ability to transform trespassers, including Hat Kid, into ice. Since no other human character without the assistance of the Time Pieces could possess any major magical abilities combined with her unique shadowy shroud, makes the true species which Queen Vanessa belongs to a mystery. She has also a red and white outline and fully black in the inside and has red eyes in the shape of stars.")
}

module.exports.config = {
  name: "queenvanessa",
  aliases: ["QV"],
  usage: "/usage",
  description: "Send a description of A Hat In Time",
  accesablebly: "Members"
}