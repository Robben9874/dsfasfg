const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === "test") {
  var ms = 120000;
      var interval = setInterval (function () {
        message.channel.send("لا إله الا الله, سبحان الله, الحمدالله, الله اكبر")
      }, ms); 
    }
});

client.login(process.env.BOT_TOKEN); 
