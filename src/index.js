import {config} from "dotenv"
import {Client , GatewayIntentBits , Events, Collection} from 'discord.js'
import * as fs from "fs"

config()

const TOKEN = process.env.DISCORD_BOT_TOKEN

const client = new Client({intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

client.login(TOKEN).catch(err => console.log(err)).then( () =>{
    console.log('client login')
} )