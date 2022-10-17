let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let cap  = `━━━ ❨ *Dompet @${who.split(`@`)[0]}* ❩ ━━━

*▥ 𝐋𝐢𝗺𝐢𝐭 :* ${user.limit}
*▥ 𝐌𝗼𝐧𝐞𝐲 :* ${user.money}
*▥ 𝐄𝐱𝐩 :* ${user.exp}`
conn.reply(m.chat, cap, fkontak, { mentions: await conn.parseMention(cap) })
}
handler.help = ['dompet', 'limit']
handler.tags = ['rpg']
handler.command = /^(dompet|limit)$/i

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}