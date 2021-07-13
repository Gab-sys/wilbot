const Discord = require('discord.js');
const Sequelize = require('sequelize');
const fs = require('fs');
const client = new Discord.Client();


//bot prefix
const prefix = '!';
client.commands = new Discord.Collection();

//making sure that bot just catches only Javascript files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//initializing Sequqlize
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

//defining the table here
const Users = sequelize.define('users', {
	user_id: {
        type: Sequelize.INTEGER,
		primaryKey: true,
        unique: true
	},
	hugs: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
    punches: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
    username: Sequelize.STRING,
});

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Wilson', { type: 'LISTENING' });
    Users.sync();
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'register'){
        try {
            // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
            const tag = await Users.create({
                user_id: message.author.id,
                hugs: 0,
                punches: 0,
                username: message.author.username,
            });
            return message.reply(`User ${tag.username} added.`);
        }
        catch (e) {
            if (e.name === 'SequelizeUniqueConstraintError') {
                return message.reply('That user already exists.');
            }
            return message.reply('Something went wrong with registering to a database.');
        }
    }
    else if(command === 'stats'){
        client.commands.get('stats').execute(message, args, Users);
    }
    else if(command === 'hug'){
        client.commands.get('hug').execute(message, args, Users);
    }
    else if(command === 'punch'){
        client.commands.get('punch').execute(message, args, Users);
    }
    else if(command === 'list')
    {
        client.commands.get('list').execute(message, args, Users);
    }
    else if(command === 'roles')
    {
        client.commands.get('roles').execute(message, args, Users);
    }
    else if(command === 'max' && args[0] === 'hugs')
    {
        client.commands.get('max_hugs').execute(message, args, Users);
    }
    else if(command === 'max' && args[0] === 'punches')
    {
        client.commands.get('max_punches').execute(message, args, Users);
    }
});


client.login(process.env.DISCORD_TOKEN);