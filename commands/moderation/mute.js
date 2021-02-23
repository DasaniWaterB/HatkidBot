const Discord = require("discord.js")
const botconfig = require("../../botconfig.json");
const colours = require("../../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You do not have the requirements for this command.");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to mute people, I need to be able to add roles in order for this command to work.")


let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Please choose a user to be muted.");

let reason = args.slice(1).join(" ");
if(!reason) reason = "No reason given"

let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
if(!muterole) {
    try{
        muterole = await message.guild.roles.create({
            name: "Muted",
            color: "#FAFC00",
            permissions: []
        })
        message.guild.channels.cache.forEach(async (channel, id) => {
               
            await channel.createOverwrite(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })
    } catch(e) {
        console.log(e.stack);
    }
}

mutee.roles.add(muterole.id).then(() => {
    message.delete()
    mutee.send(`You have been muted in ${message.guild.name} for: ${reason}`)
    message.channel.send(`${mutee.user.username} has been muted.`)
})
}

module.exports.config = {
    name: "mute",
    description: "Mutes a user in the server.",
    usage: "!mute <@user> <reason>",
    accessableby: "Members",
    aliases: ["m", "nospeak"]
}