const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping to anyone like fool'),
        async execute(interaction){
            await interaction.reply('Pong!')
        }
}