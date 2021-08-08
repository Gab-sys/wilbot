
module.exports = {
    name: "max_hugs",
    description: "Shows user with highest number of hugs",
    async execute(message, args, Users){
        var maxHugs = await Users.max('hugs');
        const user = await Users.findOne({ where: { hugs: maxHugs }});
        message.channel.send('User with highest number of hugs is ' + '**' + user.username + '**' + ' with ' + maxHugs + ' hugs! :exploding_head: ');
    }
}