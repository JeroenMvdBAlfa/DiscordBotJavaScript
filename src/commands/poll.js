module.exports.run = async (client, message, args) => {
    let pollQuestion = args.join(" ").slice(0);
    message.channel.send(pollQuestion + `: react with 👍 or 👎`)
        .then(function(message) {
            message.react("👍")
            message.react("👎")
        }).catch(function() {
            console.log("something went wrong")
    });
}

module.exports.help = {
    name: "poll",
    category: "general",
    description: "creates a poll"
}