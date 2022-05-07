module.exports.run = async (client, message, Permissions) => {
    let member = message.mentions.users.first();

    if (member.Permissions.has("KICK_MEMBER")) {
        console.log("has Permission");
    } else {
        console.log("Doesn't have permission");
    }
}

module.exports.help = {
    name: "ping",
    category: "admin",
    description: "checking what the permissions are of an user"
}