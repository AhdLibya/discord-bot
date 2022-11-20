const {Events} = require('discord.js')
const {GetCommandByName} = require(`../commands/Prefix/index`)
const PREFIX = `$`




module.exports = function(client) {
    // Prefix Commands
    client.on(Events.MessageCreate , async (msg) => {
    	if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
        // remove the prefix from the command 
        const subString = msg.content.split(PREFIX)[1]
        // remove the command name from the string
        const args = subString.split(' ')
        // new array for the argment
        let argments = []
        for(let i=1; i<=args.length; i++) 
        {
            argments.push(args[i])
        }
        const command = await GetCommandByName(args[0])
        command(msg ,argments)
    })
}