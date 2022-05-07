module.exports.run = async (client, message, args, MessageEmbed) => {
    const member = message.mentions.members.first();

    member.unban().then((member) => {
      console.log("test");
    })
}

module.exports.help = {
    name: "unban",
    category: "admin",
    description: "to uban people"
}