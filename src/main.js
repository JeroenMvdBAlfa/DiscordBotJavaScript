const {Client, Intents, MessageEmbed, Collection, Permissions, MessageMentions} = require('discord.js');
const botConfig = require("./botConfig.json");
const secrets = require("./secrets.json");
const fs = require("fs");

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS]});
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);
    client.commands.set(command.help.name, command);
    console.log(`the file ${command.help.name} is loaded`);
}

client.once("ready", () => {
    console.log(`${client.user.username} is online`);
});

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {
        await commandData.run(client, message, arguments, MessageEmbed, Permissions, MessageMentions);
        console.log(`${client.user.username} has executed a command`);
        // console.log(`${client.user.username} has been given a command ${command.help.name}`);
    } catch (error) {
        console.log(error);
        await message.reply("A problem occurred when used this command");
    }

});

client.on("guildMemberAdd", member => {
    let role = member.guild.roles.cache.find(role => role.name === "Member");
    // let role = member.guild.roles.cache.get("853720129195606016");
    if (!role) return;
    member.roles.add(role);

    const ruleChannel = member.guild.channels.cache.find(channel => channel.name === 'rules');
    member.send(`${member.user.username} welcome to the ${member.guild.name}. For the RULES please read <#` + ruleChannel + '>');
});

client.on("guildMemberAdd", message => {
    // let member = `${message.user}`;
    const test = new MessageEmbed()

        // .setColor('#a703a7')
        .setColor('RANDOM')
        .setTitle(`${message.user.username}`)
        .setDescription(`Welcome to the ${message.guild.name}`)
        .setImage(`${message.user.displayAvatarURL()}`)
        .setTimestamp();

    const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === "welcome");
    welcomeChannel.send({embeds: [test]});
});

client.on("guildMemberLeave", message => {
    const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === "welcome");
    welcomeChannel.send(`${message.user.username} left ${message.guild.name}`);
});

client.login(secrets.token);
