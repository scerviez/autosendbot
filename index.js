const { Telegraf} = require("telegraf");
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('Hello! Im remover tag bot. Fordward a message'))

n.on('message', (ctx) => {
     if(ctx.chat.type == 'private')
        ctx.copyMessage(process.env.chat_id)
})

n.launch()
