const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const prefix = ['-'];
console.log("Scrpit By Dream");


client1.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


setInterval(function() {
channel.send(` and are you abn 4rmota ? يابن كوم شكاير الاف ءح الدولية كسم اي حد يعترض طريقي`);
}, 30)
})  

client.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say1")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});

client2.on("ready", () => {
let channel =     client2.channels.get("639428699405680651")
setInterval(function() {
channel.send(` and are you abn 4rmota ? يابن كوم شكاير الاف ءح الدولية كسم اي حد يعترض طريقي`);
}, 30)
})

client2.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say2")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client3.on("ready", () => {
let channel =     client3.channels.get("639428699405680651")
setInterval(function() {
channel.send(` and are you abn 4rmota ? يابن كوم شكاير الاف ءح الدولية كسم اي حد يعترض طريقي`);
}, 30)
})

client3.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say3")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client4.on("ready", () => {
let channel =     client4.channels.get("639428699405680651")
setInterval(function() {
channel.send(` and are you abn 4rmota ? يابن كوم شكاير الاف ءح الدولية كسم اي حد يعترض طريقي`);
}, 30)
})

client4.on("message", function(message) {
  let prefix = "-";
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say4")) {
    if (!args) return;
    message.channel.send(`${args}`);
  }
});


client.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
