module.exports.run = async (client, message, args, MessageEmbed) => {
    let member = message.mentions.members.first();

    if (member) {
        let reason = args.join(" ").slice(22);
        if (reason === "") {
            reason = "no reason is given";
        }
        message.delete();
        if (member.id !== `${message.author.id}`) {
            member.kick().then((member) => {

                const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === "welcome");
                if (!welcomeChannel) return message.channel.send("Welcome channel not found");

                const kickChannel = message.guild.channels.cache.find(channel => channel.name === "bans-and-kicks");
                if (!kickChannel) return message.channel.send("Kick channel not found");

                const kickEmbed = new MessageEmbed()
                    .setDescription("Kick Log")
                    .setColor("#FFA500")
                    .addField("Kicked user: ", `${member.user.tag}`)
                    .addField("Kicked by: ", `${message.author}`)
                    .addField("Reason for the kick", reason)
                    .setFooter(message.createdAt.toLocaleDateString() + " " + message.createdAt.toLocaleTimeString());

                welcomeChannel.send(`${member.user.username} is kicked out of ${message.guild.name}`)
                kickChannel.send({embeds: [kickEmbed]});
            }).catch(() => {
                message.channel.send("Access Denied (you can not kick an admin)");
            });
        } else {
            // console.log(member);
            message.channel.send("You cannot kick yourself");
        }
    } else {
        message.channel.send("You need to mention an user.");
    }
}

module.exports.help = {
    name: "kick",
    category: "admin",
    description: "You can kick a user"
}