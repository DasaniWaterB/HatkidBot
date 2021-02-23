const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const superagent = require("superagent")
 
module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have the permissions to use this command.")

    let bannedMember = await bot.users.fetch(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id you want to unban someone.")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given."
    
    if(!message.guild.me.permissions.has(["KICK_MEMBERS", "ADMINISTARTOR"])) return message.channel.send("I don't have permissions to kick people.")|
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild.`)
    } catch(e) {
        console.log(e.message)
    }
}

module.exports.config = {
    name: "unban",
    description: "Unban a user in the server.",
    usage: "!unban <@user> <reason>",
    accessableby: "Members",
    aliases: ["m", "nospeak"]
}
