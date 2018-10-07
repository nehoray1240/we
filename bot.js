const discord = require("discord.js");
var bot = new discord.Client();
bot.on("ready", function () {
    console.log('WE is online!');
});

bot.on("message", async message => {
    bot.user.setActivity(`WE`, { type: "PLAYING" });

    if(message.content === 'אני מכיר עוד אנשים שאוהבים אותך'){
        message.channel.sendMessage('<@390246455052337152>     WE');
    }
});

bot.login(TOKEN);
