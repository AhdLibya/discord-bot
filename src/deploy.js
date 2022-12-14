require('dotenv').config()
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path')
// Test Bot Tokens
const GUILDID = process.env.GUILDID
const TOKEN = process.env.BOT_TOKEN
const CLIENTID = process.env.CLIENTID
//Deploy Bot Token

const DEPLOY_TOKEN = process.env.DEPLOY_BOT
const DEPLOY_ID = process.env.DEPLOY_ID

const commands = [];
const commandsPath = path.resolve(__dirname, './commands/Slash');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/Slash/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENTID, GUILDID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(`[ERROR]: ${error}`);
	}
})();