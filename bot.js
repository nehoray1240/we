const discord = require("discord.js");
const TOKEN = 'NDk4NTI4NjYzMTI2NjcxMzcw.DpvF4g.RBun5OnZW471xgy0b08MNq_DWMo'
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
