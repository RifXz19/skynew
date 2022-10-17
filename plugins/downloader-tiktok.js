import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix }) => {
    if (!args[0]) throw 'Uhm..url nya mana?'
    let res = await fetch(`https://ibeng-api.ddns.net/api/downloader/tiktok2?url=${args[0]}&apikey=ibeng`)
    m.reply(wait)
    let url = await res.json()
    let { video_original, audio_original, description, username } = url.result
    let cap = `*[ TikTok Downloader ]*

📛 • *Username :* ${username}
📒 • *Description :* ${description}`
	await conn.sendButtonVid(m.chat, video_original, cap, author, 'Get Audio', usedPrefix + 'audioget ' + audio_original, m)
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok|tt)$/i
handler.limit = true

export default handler