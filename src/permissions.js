// function roleControl(message) {
//     const memberRoles = message.member.roles.cache
//         .filter((roles) => roles.id !== message.guild.id)
//         .map((roles) => roles.toString());
//     const roleAdmin = message.guild.roles.cache.find(roles => roles.name === "admin");
//
//     let control = 0;
//     memberRoles.forEach(function (element) {if (element === '<@&' + roleAdmin + '>') {control += 1;} else {control += 0;}});
// }