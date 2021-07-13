
module.exports = {
    name: "max_punches",
    description: "Shows user with highest number of punches",
    async execute(message, args, Users){
        var maxPunches = await Users.max('punches');
        const user = await Users.findOne({ where: { punches: maxPunches }});
        message.channel.send('User with highest number of punches is ' + '**' + user.username + '**' + ' with ' + maxPunches + ' punches! :exploding_head: ');
    }
}