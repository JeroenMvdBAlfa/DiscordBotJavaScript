module.exports.run = async (client, message, args, MessageEmbed) => {

    let member = message.mentions.members.first();
    if (!member) {member = message.member;}

    // if(!member) return message.reply('Please specify a member!');
        const memberRoles = member.roles.cache
            .filter((roles) => roles.id !== message.guild.id)
            .map((roles) => roles.toString() + "\n");


        const infoMessage = new MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
            .addField("Username", `${member.user.username}`)
            .addField('UserTag', `#${member.id}`)
            .addField('number',`${memberRoles.length}`)
            .addField("** Roles [" + `${memberRoles.length}` + "]**" , `${memberRoles}`)
            .setColor('RANDOM');

        message.channel.send({embeds: [infoMessage]});

}

module.exports.help = {
    name: "info",
    category: "admin",
    description: "information about a member"
}
