require('dotenv').config()
const {Client , GatewayIntentBits , Collection} = require('discord.js')
const SlashCommand = require('./Scripts/SlashCommand')
const PrefixCommand = require('./Scripts/PrefixCommand')

const CLIENT_OPTIONS = [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent]
const TOKEN = process.env.BOT_TOKEN
const client = new Client({intents: CLIENT_OPTIONS })
client.commands = new Collection()

PrefixCommand(client)
SlashCommand(client)

client.login(TOKEN).catch(err => console.log(err)).then( () =>{
    console.log('client login')
})