require('dotenv').config()

const {Client , GatewayIntentBits , Events} = require("discord.js")

const client = new Client({intents: [GatewayIntentBits.Guilds] })

client.on('messageCreate' , msg => {
    console.log(msg)
})

client.on(Events.MessageCreate , msg => {
    console.log(msg.author.username)
})

client.login(process.env.DISCORD_BOT_TOKEN).catch(err => console.log(err)).then( () =>{
    console.log('client login')
} )