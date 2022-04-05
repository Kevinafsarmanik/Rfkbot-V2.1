// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/JWVl9J1sIxMG9PwyIMyQN6'
gc2 = 'https://chat.whatsapp.com/JWVl9J1sIxMG9PwyIMyQN6'
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/JWVl9J1sIxMG9PwyIMyQN6', 'https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB'] // ganti jadi group lu
global.owner = ['6283131214121','6283131214121'] // Put your number here //owner eval
global.kontak = ['6283131214121','6283131214121'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6283131214121','6283131214121','6283131214121'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'f6898e891be84fcd',
  'https://api.lolhuman.xyz': '886e0ade87d2da2cab7f1906',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'f6898e891be84fcd',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `Selesai..`
namakontak1 = 'Kepin'
namakontak2 = 'kevin afsar'

//kasihcaption = `Selesai..`

// Sticker WM
global.packname = 'By Xhvier' // ganti aja
global.author = 'XhvierPromoter' // ganti aja
global.watermark = 'kepin ganteng'
global.wm = 'Kepin ganteng'

//yyy
bc = 'Botz Wan🥀' //LynXy Broadcast
footer = '\n©Kevin'
namabot = 'XHVIER🥀'
namalu = 'kevin afsar🥀'


// 
wait = '_*Tunggu ya ...*_'
global.wait = '_*Tunggu ya ...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://telegra.ph/file/e5cffe88552e772ce2207.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
