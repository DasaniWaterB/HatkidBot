const Discord = require("discord.js")
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const ytdl = require("ytdl-core")
const prefix = botconfig.prefix
const queue = new Map();

module.exports.run = async (bot, message, args) => {
    bot.on("message", async message => {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
    
      const serverQueue = queue.get(message.guild.id);
    
      if (message.content.startsWith(`${prefix}stop`)) {
        execute(message, serverQueue);
        return;
      } else {
          message.channel.send("You need to enter a valid command!");
        }
    });
    
    async function execute(message, serverQueue) {
      const args = message.content.split(" ");
    
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          "You need to be in a voice channel to play music!"
        );
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
          "I need the permissions to join and speak in your voice channel!"
        );
      }
  
      function stop(message, serverQueue) {
        if (!message.member.voice.channel)
          return message.channel.send(
            "You have to be in a voice channel to stop the music!"
          );
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
      }
    }
  }

module.exports.config = {
  name: "stop",
  description: "Stops music in a Discord voice chat.",
  usage: "/",
  accessableby: "Members",
  aliases: ["st", "stso"]
}