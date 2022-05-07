module.exports.run = async (client, message) => {
    const member = message.mentions.members.first();
    const role = message.guild.roles.cache.find(roles => roles.name === "mute");
    if (member) {
        await member.roles.add(role);
        message.channel.send("**" + member.user.username + "** is muted");
    } else {
        message.channel.send("You cannot mute yourself");
    }
};


module.exports.help = {
    name: "mute",
    category: "admin",
    description: "Mute a player"
}