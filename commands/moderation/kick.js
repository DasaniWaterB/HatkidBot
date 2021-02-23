const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
 
 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.permissions.has(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have the permissions to use this command.")

    let kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!kickMember) return message.channel.send("Please provide a user to ban.")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    if(!message.guild.me.permissions.has(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permissions to kick people.")

    kickMember.send(`You have been kicked from ${message.guild.name} for: ${reason}`).then(() =>
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`)
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user in the server.",
    usage: "!kick <@user> <reason>",
    accessableby: "Members",
    aliases: ["m", "nospeak"]
}
