const Discord = require("discord.js")
const botconfig = process.cwd("botconfig.json")
const colours = process.cwd("colours.json");
const ytdl = require("ytdl-core")
const prefix = botconfig.prefix
const queue = new Map();
 
module.exports.run = async (bot, message, args) => {
  bot.once("reconnecting", () => {
    console.log("Reconnecting!");
  });
  
  bot.once("disconnect", () => {
    console.log("Disconnect!");
  });

  bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`${prefix}skip`)) {
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

    function skip(message, serverQueue) {
        if (!serverQueue)
          return message.channel.send("There is no song that I could skip!");
        serverQueue.connection.dispatcher.end();
      }
  
    const dispatcher = serverQueue.connection
      .skip(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }
}
module.exports.config = {
    name: "skip",
    description: "Skips music in a Discord voice chat.",
    usage: "/",
    accessableby: "Members",
    aliases: ["sk", "ss"]
}