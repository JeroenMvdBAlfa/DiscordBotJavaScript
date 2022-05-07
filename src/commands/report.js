module.exports.run = async (client, message, args, MessageEmbed) => {
    let member = message.mentions.users.first();

    if (member) {
        let reason = args.join(" ").slice(22);
        if (reason === "") {
            reason = "no reason is given";
        }

        const reportEmbed = new MessageEmbed()
            .setDescription("reports")
            .setColor("#FFFF00")
            .addField("Reported gebruiker ", `${member} met het ID ${member.id}`)
            .addField("report door ", `${message.author} met het ID ${message.author.id}`)
            .addField("Reden", reason)
            .setFooter(message.createdAt.toLocaleDateString() + " " + message.createdAt.toLocaleTimeString());

//      this is looking for the channel "report" and checking if it exits
        const reportChannel = message.guild.channels.cache.find(channel => channel.name === "report");
        if (!reportChannel) return message.channel.send(`channel not found.`);
        return reportChannel.send({embeds: [reportEmbed]});
        // message.delete();
    } else {
        message.channel.send("You need to mention an user.");
    }
}

module.exports.help = {
    name: "report",
    category: "general",
    description: "with this command you can report an other user"
}

