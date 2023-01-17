const { Client, GatewayIntentBits } = require("discord.js");
//const botconfig = require("dotenv/config");
const botconfig = require("./botconfig.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

client.on("ready", () => {
  console.log("The bot is ready");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("pong!");
  }
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.content.toLocaleLowerCase().includes("kleber")) {
    message.reply("O cara do aim assist?");
  }
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  if (message.content.toLocaleLowerCase().includes("apex")) {
    message.reply("Bora matar umas wraith bora bora!");
  }
});
//
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}hello`) {
    return message.channel.send("Hello!");
  }
});

//client.login(process.env.token);
client.login(botconfig.token);
