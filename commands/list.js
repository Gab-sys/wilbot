module.exports = {
    name: "list",
    description: "Shows the list of all users in the database.",
    async execute(message, args, Users){
        //getting all users in the database
        const UserList = await Users.findAll({ });
        
        const Userstring = UserList.map(t => t.username + '\n - hugs = '+ t.hugs + '\n - punches = ' + t.punches ).join('\n') || 'No User set.';
        return message.channel.send(`${Userstring}`, {code: true});
    }
}