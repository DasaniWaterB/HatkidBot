const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");

 
module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
 
    let {body} = await superagent
    .get('https://media.discordapp.net/attachments/563580397187891201/689972420433543216/image0-105.jpg')        
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again")
 
    let cEmbed = new Discord.MessageEmbed()
    .setTitle('Why the peck are you trying to lewd me? Im a child.')
    .attachFiles(['/Users/kanep/hathoe/assets/image0-105.jpg'])
    .setImage('attachment://image0-105.jpg')
    .setColor(colours.yellow)
 
    message.channel.send({embed: cEmbed})
 
    msg.delete();
}
 
module.exports.config = {
    name: "hatkid_hentai",
    aliases: ["Porn", "porn", "hentai", "Hentai"],
    usage: "/usage",
    description: "",
    accesablebly: "Members"
}