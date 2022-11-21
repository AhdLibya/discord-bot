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
        client.isNull = false
        for(let i=1; i<=args.length; i++) 
        {
            argments.push(args[i])
        }
        const command =  GetCommandByName(args[0])
        // make sure the command is exist other way we return without breaking the whole bot
        if (!command || command === null)
        {
            msg.channel.send(`${args[0]} is Not valid Command Name`)
            return ;
        }
        else await command(msg ,argments , client)
    })
}