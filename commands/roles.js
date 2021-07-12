module.exports = {
    name: "roles",
    description: "Command for checking how many hugs or punches user has and give a role if user has a certian number",
    async execute(message, args, Users){
        
        const tag = await Users.findOne({ where: { user_id: message.author.id }});
        if (tag) {
  
            CheckHug(message, tag.hugs);
            CheckPunch(message, tag.punches);
        }
        else return message.reply(`Could not find tag: ${message.author.name}. Please use !register to register to the database.`);
    }
}
function CheckHug(message, hugs) {
    switch (hugs) {
        case 10:
            message.member.roles.add("829711539661570129");
            break;
        case 100:
            message.member.roles.add("829711539661570129");
            break;
        case 1000:
            message.member.roles.add("829711539661570129");
            break;
        case 10000:
            message.member.roles.add("829711539661570129");
            break;
        case 100000:
            message.member.roles.add("829711539661570129");
            break;
        case 1000000:
            message.member.roles.add("829711539661570129");
            break;
        default:
            message.channel.send("You don't have enough hugs to get a hug role.");
            break;
    }
}

function CheckPunch(message, punches) {
    switch (punches) {
        case 10:
            message.member.roles.add("829711539661570129");
            break;
        case 100:
            message.member.roles.add("829711539661570129");
            break;
        case 1000:
            message.member.roles.add("829711539661570129");
            break;
        case 10000:
            message.member.roles.add("829711539661570129");
            break;
        case 100000:
            message.member.roles.add("829711539661570129");
            break;
        case 1000000:
            message.member.roles.add("829711539661570129");
            break;
        default:
            message.channel.send("You don't have enough punches to get a punch role.");
            break;
    }
}