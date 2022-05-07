require('../permissions.js');
module.exports.run = async (client, message) => {
    // message.channel.send(`Hello ${message.author.username}`);

    const memberRoles = message.member.roles.cache
        .filter((roles) => roles.id !== message.guild.id)
        .map((roles) => roles.toString());

    const roleAdmin = message.guild.roles.cache.find(roles => roles.name === "admin");

    let control = 0;
    memberRoles.forEach(function (element) {if (element === '<@&' + roleAdmin + '>') {control += 1;} else {control += 0;}});
    if (control > 0) {
        message.channel.send(`Hello ${message.author.username}`);
    } else {
        message.channel.send("You do not have the correct permissions");
    }
}

module.exports.help = {
    name: "hello",
    category: "general",
    description: "Response with hello"
}