const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    if(from.id == 741780532){
        ctx.reply(`Seja bem vindo, mestre ${from.first_name}!`)
    }else{
        ctx.reply(`${from.first_name} você não é meu dono, desculpa...`)
    }
})

bot.startPolling()