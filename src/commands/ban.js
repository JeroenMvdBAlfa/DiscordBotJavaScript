module.exports.run = async (client, message, args, MessageEmbed) => {
    const member = message.mentions.members.first();

    const memberRoles = message.member.roles.cache
        .filter((roles) => roles.id !== message.guild.id)
        .map((roles) => roles.toString());

    const roleAdmin = message.guild.roles.cache.find(roles => roles.name === "admin");

    let control = 0;
    memberRoles.forEach(function (element) {if (element === '<@&' + roleAdmin + '>') {control += 1;} else {control += 0;}});
    if (control > 0) {
        if (member) {
            let reason = args.join(" ").slice(22);
            if (reason === "") {
                reason = "no reason is given";
            }
            if (member.id !== `${message.author.id}`) {
                member.ban().then((member) => {
                    const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === "welcome");
                    if (!welcomeChannel) return message.channel.send("Welcome channel not found");

                    const kickChannel = message.guild.channels.cache.find(channel => channel.name === "bans-and-kicks");
                    if (!kickChannel) return message.channel.send("Kick channel not found");

                    const banEmbed = new MessageEmbed()
                        .setDescription("Ban Log")
                        .setColor("#ff0000")
                        .addField("Banned user: ", `${member.user.tag}`)
                        .addField("Banned by: ", `${message.author}`)
                        .addField("Reason for the ban", reason)
                        .setFooter(message.createdAt.toLocaleDateString() + " " + message.createdAt.toLocaleTimeString());

                    // message.channel.send(member.displayName + " has been successfully banned ");
                    welcomeChannel.send(`${member.user.username} is banned out of ${message.guild.name}`);
                    kickChannel.send({embeds: [banEmbed]});

                    // DM the bannend person with the reason for the ban

                    const banDM = new MessageEmbed()
                        .setDescription("Bannend")
                        .setColor("#ff0000")
                        .addField("Bannend by: ", `${message.author}`)
                        .addField("Reason for the ban", reason)
                        .setFooter(message.createdAt.toLocaleDateString() + " " + message.createdAt.toLocaleTimeString());

                    member.send("test");
                }).catch(() => {
                    message.channel.send("Access Denied (you can not ban an admin)");
                });
            } else {
                message.channel.send("you cannot ban yourself");
            }
        } else {
            message.channel.send("You need to mention an user.");
        }
    } else {
        message.channel.send("You do not have the Right Role");
    }
}

module.exports.help = {
    name: "ban",
    category: "admin",
    description: "You can ban a user"
}