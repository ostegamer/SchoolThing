const Discord = require('discord.js');

const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const currentDate = new Date();

const WeekDay = currentDate.getDay();

bot.once('ready', () => {
    console.log('Lustrum is online!');
});

bot.on('message', message => {
    if(message.content === "HELLO"){
        message.reply('Hello ;)');
    }
    })

    bot.on('message', message => {
        if(message.content === "Fuck you"){
            message.reply('No you');
        }
        })
        
bot.on('message', message => {
    if(message.content === "Date"){
        message.reply(`The date is: ${currentDate}`);
    }
    })

bot.on('message', message => {
    if(message.content === "Day"){
        message.reply(`The date is: ${WeekDay}`);
    }
    })

bot.on('message', message => {
    if(WeekDay == 1){
        (`The date is: ${currentDate}`);
    }
    })

bot.login('OTA1NTU1MzgzMTc3ODM4Nzcy.YYLyKw.w120ATn-A4C-lmtR-ImlrVx59u0');