require('dotenv').config()
const {Client , GatewayIntentBits , Collection} = require('discord.js')
const {Player} = require('discord-music-player')
const SlashCommand = require('./Scripts/SlashCommand')
const PrefixCommand = require('./Scripts/PrefixCommand')

const CLIENT_OPTIONS = [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent , GatewayIntentBits.GuildVoiceStates]
const TOKEN = process.env.BOT_TOKEN
const client = new Client({intents: CLIENT_OPTIONS })
client.commands = new Collection()
client.Player = new Player(client)

PrefixCommand(client)
SlashCommand(client)

client.login(TOKEN).catch(console.log).then( () =>{
    console.log('client login')
})