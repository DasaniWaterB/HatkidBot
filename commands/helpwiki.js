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
        .setColor(colours.purple)
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(colours.yellow)
        .setAuthor(`A Hat In Time Wikipedia Command`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the Hat In Time Wikipedia pages.`)
        .addField('Characters:', "``hatkid`` ``snatcher``  ``queenvanessa`` ``mafia`` ``mafiaboss`` ``djgrooves`` ``theconductor`` ``caw`` ``mustachegirl``")
        .addField('Game:', "``AHatInTime``")
        .addField('Chapters:', "Coming Soon")
        .addField('Acts:', "Coming Soon")
        .addField('DLCs:', "``nyakuza`` ``sealthedeal``")
        .setFooter("hatkid", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}

module.exports.config = {
    name: "help_wiki",
    aliases: ["Help_wiki"],
    usage: "/usage",
    description: "Sends a list of commands and triggers",
    accesablebly: "Members"
}