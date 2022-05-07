module.exports.run = async (client, message) => {
    let i = 0;
    setInterval(function () {
        const array = [
            ":jack_o_lantern:",
            ":guide_dog:",
            ":man_mage:",
            ":curling_stone:",
            ":slot_machine:",
        ];
        if (i < array.length) {
            console.log(array[i]);
            // console.log("number: " + i);
            // const welcomeChannel = message.guild.channels.cache.find(channel => channel.name === "welcome");
            const pkChannel = message.guild.channels.cache.find(channel => channel.name === "test");
            pkChannel.send(array[i]);
            // pkChannel.send("number: " + i);
            i += 1;
        } else {
            return;
        }
    }, 3000);
}

module.exports.help = {
    name: "interval",
    category: "admin",
    description: "Sends every x minutes a message"
}