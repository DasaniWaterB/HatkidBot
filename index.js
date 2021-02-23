const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const superagent = require("superagent")
var eco = require("discord-economy");
const chalk = require('chalk');
const colour = require('color-name');
var leveling = require('discord-leveling')
var parseArgs = require('minimist')
const prefix = botconfig.prefix


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", function (status){
    console.log(chalk.green(`Running, code issues will and messages will be logged here. The bot name is: ${bot.user.tag}!`))
})
//bot.user.setActivity("Obtaining the Time Pieces");

bot.on("ready", async () => {
    let statuses = [
        `Obtaining The Time Pieces`,
        "Do /help for a list of commands",
        `Now with a levelling system`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status);
    }, 5000)
})

const settings = {
    prefix: '/',
    token: 'YOUR TOKEN'
}

bot.on('message', async message => {
 
    //This reads the first part of your message behind your prefix to see which command you want to use.
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
   
    //These are the arguments behind the commands.
    var args = message.content.split(' ').slice(1);
   
    //If the user that types a message is a bot account return.
    if (message.author.bot) return;
   
    //When someone sends a message add xp
    var profile = await leveling.Fetch(message.author.id)
    leveling.AddXp(message.author.id, 1)
    //If user xp higher than 100 add level
    if (profile.xp + 10 > 100) {
        await leveling.AddLevel(message.author.id, 1)
        await leveling.SetXp(message.author.id, 0)
        message.reply(`You just leveled up!! You are now level: ${profile.level + 1}`)
      }    
});

bot.on('message', msg => {
    console.log("Server:" + chalk.green(msg.guild.name) + " " + "Channel:" + chalk.red(msg.channel.name) + " " + "Author:" + chalk.yellow(msg.author.username) + " " + "Message:" + chalk.blue(msg.content))

    var msgarr = msg.content.split(" ")
    var command = parseArgs(msgarr)._
    var opts = parseArgs(msgarr)
    delete opts._

    switch(command[0]){
      case "Peck":{
        var Peck = () => {
            msg.channel.send("Neck.")
        }
        
        if("delay" in opts){
            setTimeout(Peck, opts.delay)
        } else {
          Peck()
        }
        break; 
      }
      case "Egg":{
        var Egg = () => {
            msg.channel.send("https://i.ytimg.com/vi/hyV0wnc2pqQ/hqdefault.jpg")
        }
        
        if("delay" in opts){
            setTimeout(Egg, opts.delay)
        } else {
            Egg()
        }
        break; 
      }
    }
});

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/economy/", (err, files) => {
 
  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
       return console.log("[LOGS] Couldn't Find Commands!");
  }

  jsfile.forEach((f, i) => {
      let pull = require(`./commands/economy/${f}`);
      bot.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
          bot.aliases.set(alias, pull.config.name)
      });
  });
});


fs.readdir("./commands/A Hat In Time licenses/", (err, files) => {
 
    if(err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }
  
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/A Hat In Time licenses/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
  });

fs.readdir("./commands/Music/", (err, files) => {
 
  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
       return console.log("[LOGS] Couldn't Find Commands!");
  }

  jsfile.forEach((f, i) => {
      let pull = require(`./commands/Music/${f}`);
      bot.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
          bot.aliases.set(alias, pull.config.name)
      });
  });
});

fs.readdir("./commands/moderation/", (err, files) => {
 
    if(err) console.log(err)
 
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/moderation/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

fs.readdir("./commands/leveling/", (err, files) => {
 
    if(err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }
  
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/leveling/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
  });

fs.readdir("./commands/", (err, files) => {
 
    if(err) console.log(err)
 
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

fs.readdir("./commands/triggers/", (err, files) => {
 
    if(err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }
  
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/triggers/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
  });

bot.on("message", async message => {
    if(message.author.bot) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(botconfig.token);