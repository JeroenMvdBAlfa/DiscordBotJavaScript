module.exports.run = async (client, message, args, MessageEmbed) => {
    const quotes = [
        // "Het huis staat in de fik en we zijn geüpraded van een emmertje naar een tuinslang. Dat is hartstikke fijn, maar uiteindelijk ga je daar het huis niet mee blussen.",
        // "Ik heb een hele langzame wasmachine en een slechte stomerij.",
        // "Ik maar denken dat ie zich niet wilde laten testen. De borrel viel weer vroeg vandaag.",
        "The world is indeed a comic, but the joke is on mankind.",
        "Pleasure to me is wonder—the unexplored, the unexpected, the thing that is hidden and the changeless thing that lurks behind superficial mutability.",
        "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
        "Almost nobody dances sober, unless they happen to be insane.",
        "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of the infinity, and it was not meant that we should voyage far.",
    ];
    const random = Math.floor(Math.random() * quotes.length);
    const embed = new MessageEmbed()
        .setColor('#a703a7')
        .setTitle(`Quote van ${client.user.username}`)
        .setDescription(quotes[random]);

    message.channel.send({embeds: [embed]});
}

module.exports.help = {
    name: "quote",
    category: "general",
    description: "gives a random quote"
}

