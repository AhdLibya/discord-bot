

const Data = {
    hi : function(msg ,arguments) {
       msg.channel.send(`Hi ${msg.author} welcom `)
    },
}

exports.GetCommandByName = async function(commandName) 
{
    return Data[commandName]
}