const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have the permissions to use this command.")

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permissions to add roles.")

let mutee = message.mentions.members.first() || message.guild.member.get(args[0]);
if(!mutee) return message.channel.send("Please supply a user to be unmuted")

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

let muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
if(!muteRole) return message.channel.send("There is no mute role to remove.")

mutee.roles.remove(muteRole.id).then(() => {
    message.delete()
    mutee.send(`You are now unmuted in ${message.guild.name}`).catch(err => console.log(err))
    message.channel.send(`${mutee.user.username} has been unmuted.`)
})

}

module.exports.config = {
    name: "unmute",
    description: "unmutes a user in the server.",
    usage: "/unmute <@user>",
    accessableby: "Members",
    aliases: ["um", "speak"]
}