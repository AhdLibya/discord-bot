const {Events} = require('discord.js')
const PREFIX = `$`

const test = {
    test : [
        function () {

        } , 
        450
    ]
}


function GetCommandByName(commandName) {
    return test[commandName]
}


module.exports = function Start(client) {
    // Prefix Commands
    client.on(Events.MessageCreate , (msg) => {
    	if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
        console.log( GetCommandByName('test')[1])
    	msg.channel.send(`Hi ${msg.author.username} welcom to the server`)
    })
}