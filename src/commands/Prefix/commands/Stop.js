

module.exports = async (msg , argment , client) => {

    let queue = client.Player.createQueue(msg.guild.id);
    queue.stop()
}