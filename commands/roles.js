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
            message.member.roles.add("864241081986056252");
            message.channel.send("You have 10 hugs! Here, take this role.");
            break;
        case 100:
            message.member.roles.add("864240193028358184");
            message.channel.send("You have 100 hugs! Here, take this role.");
            break;
        case 1000:
            message.member.roles.add("864240359580368957");
            message.channel.send("You have 1 000 hugs! Here, take this role.");
            break;
        case 10000:
            message.member.roles.add("864240492609667092");
            message.channel.send("You have 10 000 hugs! Here, take this role.");
            break;
        case 100000:
            message.member.roles.add("864240622633615380");
            message.channel.send("You have 100 000 hugs! Here, take this role.");
            break;
        case 1000000:
            message.member.roles.add("864240837764448316");
            message.channel.send("You have 1 000 000 hugs! Here, take this role.");
            break;
        default:
            message.channel.send("You don't have enough hugs to get a hug role.");
            break;
    }
}

function CheckPunch(message, punches) {
    switch (punches) {
        case 10:
            message.member.roles.add("864241204535623750");
            message.channel.send("You have 10 punches! Here, take this role.");
            break;
        case 100:
            message.member.roles.add("864241326883209247");
            message.channel.send("You have 100 punches! Here, take this role.");
            break;
        case 1000:
            message.member.roles.add("864241443575693332");
            message.channel.send("You have 1000 punches! Here, take this role.");
            break;
        case 10000:
            message.member.roles.add("864241546844045333");
            message.channel.send("You have 10 000 punches! Here, take this role.");
            break;
        case 100000:
            message.member.roles.add("864241674725097523");
            message.channel.send("You have 100 000 punches! Here, take this role.");
            break;
        case 1000000:
            message.member.roles.add("864241798997999626");
            message.channel.send("You have 1 000 000 punches! Here, take this role.");
            break;
        default:
            message.channel.send("You don't have enough punches to get a punch role.");
            break;
    }
}