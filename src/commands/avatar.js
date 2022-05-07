module.exports.run = async (client, message, args, MessageEmbed) => {
    let member = message.mentions.members.first();

    if(!member) {
        member = message.member;
    }

        const avatar = new MessageEmbed()
            .setColor('#0803a7')
            .setTitle(`Avatar of ${member.user.username}`)
            .setImage(`${member.user.displayAvatarURL({dynamic: true})}`);
        message.channel.send({embeds: [avatar]});
}

module.exports.help = {
    name: "avatar",
    category: "general",
    description: "gives you your profile picture back"
}
