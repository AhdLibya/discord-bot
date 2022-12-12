

const Data = {
    hi : async (msg ,args) => {
       msg.channel.send(`Hi ${msg.author} welcom `)
    },

    show : async (msg , args) => { // args[0] = target
        if (msg.author.username === args[0])
        {
            msg.channel.send(`you want to target self`)
            return ;
        } else {
            msg.channel.send(`error with msg \n[author]: ${msg.author.username} with the args {${args[0]}} `)
        }
    },

    Play : require('./commands/Play'),
    Stop : require('./commands/Stop')
}

exports.GetCommandByName = function(commandName) 
{
    if (Data[commandName] === null) return false;
    return Data[commandName] ;
}