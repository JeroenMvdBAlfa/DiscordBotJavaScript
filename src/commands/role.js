module.exports.run = async (client, message) => {
    // const member = message.mentions.members.first();
    const member = message.member;
    const role = message.guild.roles.cache.find(roles => roles.name === "Member");
    await member.roles.add(role);
    // message.channel.send("**" + message.member.user.username + "** is muted");
}

module.exports.help = {
    name: "role",
    category: "general",
    description: "give yourself a member role"
}