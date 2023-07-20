module.exports = async (basenewkirbotz, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = basenewkirbotz.user.id.split(':')[0]
const sender = m.key.fromMe ? (basenewkirbotz.user.id.split(':')[0]+'@s.whatsapp.net' || basenewkirbotz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isOwner = owner.includes(senderNumber) || isBot
const reply = (teks) => { basenewkirbotz.sendMessage(from, { text: teks, contextInfo:{ forwardingScore: 9999, isForwarded: true }}, { quoted: m }) }

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return basenewkirbotz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const premNumber = JSON.parse(fs.readFileSync("./all/database/premium.json"))

// Cek Database
const isPremium = premNumber.includes(m.sender)

// Jangan Di Ubah Tar Error
try {
ppuser = await basenewkirbotz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Jangan Di Ubah
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await basenewkirbotz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await basenewkirbotz.getName(i + '@s.whatsapp.net')}\n
FN:${await basenewkirbotz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

switch (command) {
case "menu": {
owned = owner + "@s.whatsapp.net"
const text12 = `Hai Kak @${sender.split("@")[0]}

┅═┅═❏ *INFO - BOT* ❏═┅═┅
Nama Creator : *@${owned.split("@")[0]}*
Nomor Creator : *${namabot}*
Runtime Bot : *${runtime(process.uptime())}*
Pengguna : *${isOwner ? `Owner Bot` : `User Bot`}*
Mode Bot : *${basenewkirbotz.public ? `Public Mode` : `Self Mode`}*
━一一一一一一一一一一━

*°᭄ PUSHKONTAK FITUR*
${prefix}cekidgc
${prefix}pushkontak
${prefix}pushkontakv2

*°᭄ USER FITUR*
${prefix}owner
${prefix}script
${prefix}qc

*°᭄ JADIBOT FITUR*
${prefix}jadibot
${prefix}listjadibot
${prefix}stopjadibot`
basenewkirbotz.sendMessage(from, { image: thumb, caption: text12, contextInfo: { mentionedJid:[sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "jadibot":{
if (!isPremium && !isOwner) return basenewkirbotz.sendMessage(from, { text: `Maaf Kak @${sender.split("@")[0]}, Kakak Belum Premium Silahkan Chat @${creAtor.split("@")[0]} Untuk Membeli Premium`, mentions: [sender, creAtor], "contextInfo": { "forwardingScore": 99999999999, "isForwarded": true, mentionedJid: [sender, creAtor] }}, { quoted: m })
if (m.isGroup) return
jadibot(basenewkirbotz, sender)
}
break
case "listjadibot":{
if (!isPremium && !isOwner) return basenewkirbotz.sendMessage(from, { text: `Maaf Kak @${sender.split("@")[0]}, Kakak Belum Premium Silahkan Chat @${creAtor.split("@")[0]} Untuk Membeli Premium`, mentions: [sender, creAtor], "contextInfo": { "forwardingScore": 99999999999, "isForwarded": true, mentionedJid: [sender, creAtor] }}, { quoted: m })
if (m.isGroup) return
listjadibot(basenewkirbotz, m)
}
break
case "stopjadibot":{
if (!isPremium && !isOwner) return basenewkirbotz.sendMessage(from, { text: `Maaf Kak @${sender.split("@")[0]}, Kakak Belum Premium Silahkan Chat @${creAtor.split("@")[0]} Untuk Membeli Premium`, mentions: [sender, creAtor], "contextInfo": { "forwardingScore": 99999999999, "isForwarded": true, mentionedJid: [sender, creAtor] }}, { quoted: m })
if (m.isGroup) return
stopjadibot(basenewkirbotz, sender)
}
break
case "qc": {
if (!quoted){
const getname = await basenewkirbotz.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
basenewkirbotz.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
basenewkirbotz.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "script": {
owned = owner + "@s.whatsapp.net"
teks82 = `Chat @${owned.split("@")[0]}`
basenewkirbotz.sendMessage(from, { text: teks82, mentions: [owned] }, { quoted: m })
}
break
case "owner": {
const repf = await basenewkirbotz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
basenewkirbotz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "cekidgc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await basenewkirbotz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "pushkontak":{
if (!isOwner) return reply(mess.only.owner)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await basenewkirbotz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await basenewkirbotz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await basenewkirbotz.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
reply(mess.success)
}
break
case "pushkontakv2":{
if (!isOwner) return reply(mess.only.owner)
if (!isGroup) return reply(mess.only.group + `\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await basenewkirbotz.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
for (let men of halsss) {
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await basenewkirbotz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await basenewkirbotz.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply(mess.success)
}
break
default:
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
basenewkirbotz.sendMessage("6287705048235@s.whatsapp.net", {text:e})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})