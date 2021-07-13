module.exports = {
    name: "punch",
    description: "Command for punching Wilson.",
    async execute(message, args, Users){
        const tag = await Users.findOne({ where: { user_id: message.author.id }});
        if(tag){
            var punches = tag.punches + 1;
            await Users.update({ punches: punches}, { where: { user_id: message.author.id} });
            message.channel.send('You punched Wilson.');
        } 
        else return message.reply(`Could not find user: ${message.author.name}. Please use !register to register to the database.`);
    }
}