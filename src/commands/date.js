module.exports.run = async (client, message) => {
    const date = new Date();
    message.channel.send(date.toLocaleTimeString() + " " + date.toLocaleDateString());
}

module.exports.help = {
    name: "date",
    category: "general",
    description: "gives you the current time"
}