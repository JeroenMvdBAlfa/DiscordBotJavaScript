module.exports.run = async (client, message) => {
    const member = message.mentions.members.first();
    const role = message.mentions.roles.first();

    if (!member && !role) {
        message.channel.send("You Forgot To Mention A Person And A Role");
    } else if (!member) {
        message.channel.send("You Forgot the Member");
    } else if (!role) {
        message.channel.send("You Forgot The Role");
    } else {
            await member.roles.remove(role);
            message.channel.send("The role **" + role.name + "** has been removed from **" + member.user.username + "**");
    }

};


module.exports.help = {
    name: "removerole",
    category: "admin",
    description: "You can give a role to an other user"
}