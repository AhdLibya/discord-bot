const {Events} = require('discord.js')
const fs = require('fs')
const path = require('node:path')


module.exports = function(client) {
    // slash command
    client.on(Events.InteractionCreate, async interaction => {
    	if (!interaction.isChatInputCommand()) return;

    	const command = interaction.client.commands.get(interaction.commandName);

    	if (!command) {
    		console.error(`No command matching ${interaction.commandName} was found.`);
    		return;
    	}

    	try {
        
    		await command.execute(interaction);
    	} catch (error) {
    		console.error(error);
    		await interaction.reply({ content: `[ERROR]: There was an error while executing this command!\n[DEBUG]: ${error}` , ephemeral: true });
    	}
    });
    
    const commandsPath = path.join(__dirname, '../commands/Slash');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
    	const filePath = path.join(commandsPath, file);
    	const command = require(filePath);
    	// Set a new item in the Collection with the key as the command name and the value as the exported module
    	if ('data' in command && 'execute' in command) {
    		client.commands.set(command.data.name, command);
    	} else {
    		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    	}
    }

}

