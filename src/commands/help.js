const botConfig = require("../botConfig.json");

module.exports.run = async (client, message, args, MessageEmbed) => {

    try {
        const prefix = botConfig.prefix;
        let response = "**Bot Commands**\n\n";
        let general = "\n";
        let info = "\n";
        let admin = "\n";

        client.commands.forEach(command => {
            switch (command.help.category) {
                case "general":
                    general += `${prefix}${command.help.name} - ${command.help.description}\n`;
                    break;
                case "info":
                    info += `${prefix}${command.help.name} - ${command.help.description}\n`;
                    break;
                case "admin":
                    admin += `${prefix}${command.help.name} - ${command.help.description}\n`;
                    break;
            }
        });

        response += general + info + admin;

        const test = new MessageEmbed()
            .setColor('#0803a7')
            .setTitle(`Help`)
            .addField("general", general)
            .addField('info', info)
            .addField("Admin", admin)
            .setFooter(message.createdAt.toLocaleDateString() + " " + message.createdAt.toLocaleTimeString());

        await message.channel.send({embeds: [test]}).then(() => {
        // await message.channel.send(response).then(() => {
            // return message.reply("Test");
        }).catch(() => {
            return message.reply("motherfucker");
        })

    } catch (error) {
        message.reply("something went wrong");
        console.log(error);
    }

}


module.exports.help = {
    name: 'help',
    category: "info",
    description: "gives back all commands"
}