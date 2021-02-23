const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has(["BAN_MEMBERS", "ADMINISTATOR"])) return message.channel.send("You don't have the permissions to use this command.")

    let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!banMember) return message.channel.send("Please provide a user to ban.")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    if(!message.guild.me.permissions.has(["BAN_MEMBERS", "ADMINISTARTOR"])) return message.channel.send("I don't have permissions to add roles.")

    
    banMember.send(`You have been temporarily banned from ${message.guild.name} for: ${reason}`).then(() =>
    banMember.ban(banMember, { days: 1, reason: reason})).then(() =>  message.guild.members.unban((86400000), banMember.id, { reason: "Softban"})).catch(err => console.log(err));

    message.channel.send(`**${banMember.user.tag}** has been banned`)
}


module.exports.config = {
    name: "softban",
    description: "temporarily bans a user in the server.",
    usage: "/softban <@user> <1day> <reason>",
    accessableby: "Members",
    aliases: []
}