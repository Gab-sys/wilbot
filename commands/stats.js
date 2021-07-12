module.exports = {
    name: "stats",
    description: "Shows the stats of the user.",
    async execute(message, args, Users){
        const tag = await Users.findOne({ where: { user_id: message.author.id }});
        if (tag) {
            return message.channel.send('You hugged Wilson ' + tag.get('hugs') + ' times and punched Wilson ' + tag.get('punches') + ' times.');
        }
        else return message.reply(`Could not find tag: ${message.author.name}. Please use !register to register to the database.`);
    }
}