const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
 
    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)
 
    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor(colours.yellow)
            .setAuthor(`Hatkid help`, message.guild.iconURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"} \n**Usage:** ${command.config.usage || "/"}\n**Accessable by:** ${command.config.accesablebly || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
        }}
    
    if(!args[0]) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Help Command`, message.guild.iconURL)
        .setColor(colours.yellow)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(colours.yellow)
        .setAuthor(`Help Command`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the Commands and triggers.\nPrefix = ${prefix}`)
        .addField('A Hat In Time links:', "``links`` ``soundtracks`` ``dlc_links``")
        .addField('A Hat In Time wikipedia:', "Do ``/help_wiki`` to see the commands for the wikipedia")
        .addField('Economy:', "``balance`` ``daily`` ``resetdaily`` ``leaderboard`` ``transfer`` ``dice`` ``delete`` ``work`` ``slots``")
        .addField('Moderation (Please note, the bot does need the mute role to be named "Muted" for the mute command to work ):', "``Mute`` ``Unmute`` ``Ban`` ``Softban`` ``Kick`` ``Unban``")
        .addField('Music:', "``Play`` ``Stop`` ``Skip``")
        .addField('NSFW:', "``Hatkid_hentai`` ``swear``")
        .addField('Note:', "The music commands do not work yet.")
        .setFooter("hatkid", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}

module.exports.config = {
    name: "help",
    aliases: ["hp", "HP", "Help"],
    usage: "/usage",
    description: "Sends a list of commands and triggers",
    accesablebly: "Members"
}