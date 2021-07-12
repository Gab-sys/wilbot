module.exports = {
    name: "list",
    description: "Shows the list of all users in the database.",
    async execute(message, args, Users){
        if(message.member.roles.cache.has("847552231288602664"))
        {
            //getting all users in the database
            const UserList = await Users.findAll({ });
        
            const Userstring = UserList.map(t => t.username + '\n - hugs = '+ t.hugs + '\n - punches = ' + t.punches ).join('\n') || 'No User set.';
            return message.channel.send(`${Userstring}`, {code: true});
        }
        else return message.reply(`Only users with a special role can use this command.`);
    }
}