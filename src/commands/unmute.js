module.exports.run = async (client, message) => {
    const member = message.mentions.members.first();
    const role = message.guild.roles.cache.find(roles => roles.name === "mute");
    if(member) {
        await member.roles.remove(role);
        message.channel.send("**" + member.user.username + "** is unmuted");
    } else {
        message.channel.send("I don't know who to unmute, so please say it to me");
    }
};


module.exports.help = {
    name: "unmute",
    category: "admin",
    description: "Unmute a player"
}