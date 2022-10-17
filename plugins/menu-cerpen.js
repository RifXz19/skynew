import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let imgr = fla.getRandom()
if (!args[0]) {
let caption = `${htki} List Cerpen ${htka}

➩ ${usedPrefix + command} remaja
➩ ${usedPrefix + command} anak 
➩ ${usedPrefix + command} misteri 
➩ ${usedPrefix + command} cinta 
➩ ${usedPrefix + command} budaya
➩ ${usedPrefix + command} romantis 
➩ ${usedPrefix + command} galau
➩ ${usedPrefix + command} gokil
➩ ${usedPrefix + command} inspiratif 
➩ ${usedPrefix + command} kehidupan 
➩ ${usedPrefix + command} sastra 
➩ ${usedPrefix + command} jepang 
➩ ${usedPrefix + command} korea
➩ ${usedPrefix + command} keluarga 
➩ ${usedPrefix + command} persahabatan 
➩ ${usedPrefix + command} kristen 
➩ ${usedPrefix + command} ramadhan
➩ ${usedPrefix + command} liburan 
➩ ${usedPrefix + command} lingkungan 
➩ ${usedPrefix + command} mengharukan 
➩ ${usedPrefix + command} motivasi 
➩ ${usedPrefix + command} perjuangan 
➩ ${usedPrefix + command} nasihat
➩ ${usedPrefix + command} pendidikan 
➩ ${usedPrefix + command} petualangan`
await conn.sendFile(m.chat, imgr + 'List Cerpen', 'cerpen.jpg', caption, m)
}
let res = await fetch(`https://betabotz-api.herokuapp.com/api/story/cerpen?type=${args[0]}&apikey=BetaBotz`)
let anu = await res.json()
let p = anu.result
let cap = `☰ ━━━ ❨ Cerpen ❩ ━━┄┈ ☰

◈ *Title :* ${p.title}
◈ *Author:* ${p.author}
◈ *Kategori :* ${p.kategori}
◈ *Lolos :* ${p.lolos}

◎ *Cerpen :* 
    ➥ ${p.cerita}
`
await conn.sendButton(m.chat, cap, `Cerita Pendek ${args[0]}`, imgr + 'Random Cerpen', [
          ['⇄ Back To Menu ⇄', '.menu']
], m)
}
handler.help = ['cerpen']
handler.tags = ['internet', 'random']
handler.command = /^(cerpen)$/i

export default handler