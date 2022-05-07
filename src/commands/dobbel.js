module.exports.run = async (client, message, args) => {
    let numberInput = args.join(" ").slice(0);
    let number = parseInt(numberInput);
    if (!number) {
        number = 6;
    }
    console.log(number);
    const dobbel = Math.ceil(Math.random() * number)
    return message.channel.send(dobbel.toString());
}

module.exports.help = {
    name: "dobbel",
    category: "general",
    description: "Gives a random number between 1 and a given number (default is 6)"
}