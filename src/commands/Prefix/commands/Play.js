

module.exports = async (msg , argment, client) => { // argment[0] = url or path for the music u wanna play
    if (!msg.member.voice.channel)  return msg.channel.send(`you have to be in voice channel to run this command`);
    
    
    
    let guildQueue = client.Player.getQueue(msg.guild.id);
    client.guildQueue = guildQueue
    
    let queue = client.Player.createQueue(msg.guild.id);
    await queue.join(msg.member.voice.channel);
    
    let url = argment[0]
    if (!url) return msg.channel.send('you have to Provide url to play');
    const result = await queue.play(url).catch((err) => {
        console.error(err)
        if (!guildQueue)
            queue.stop()
    })

    client.Player.on('channelEmpty' , () => {
        client.Player.deleteQueue(msg.guild.id)
    })
}