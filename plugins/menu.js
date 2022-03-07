let levelling = require('../lib/levelling')
let { messagetype } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endswith('g.us'))
const defaultmenu = {
  before: `
┌────〔 %me 〕───⬣
│⬡ hai, %name!
│⬡ tersisa *%limit limit*
│⬡ role *%role*
│⬡ level *%level (%exp / %maxexp)*
│⬡ [%xp4levelup]
│⬡ %totalexp xp secara total
│ 
│⬡ hari: *%week %weton*
│⬡ tanggal: *%date*
│⬡ tanggalislam:*%dateislamic*
│⬡ waktu: *%time*
│
│⬡ uptime: *%uptime (%muptime)*
│⬡ database: %rtotalreg dari %totalreg
│⬡ memory used : 
│⬡ ${(process.memoryusage().heapused / 1024 / 1024).tofixed(2)}mb / ${math.round(require('os').totalmem / 1024 / 1024)}mb
╰────────────⬣
%readmore`.trimstart(),
  header: '*┌──〔 %category〕*',
  body: '*│*⦁ %cmd %islimit %ispremium',
  footer: '*└────⦁*\n',
  after: `
  ⬣━〔Wan🥀〕━⬣

`,
}
let handler = async (m, { conn, usedprefix: _p, args, command }) => {
	let { anon, anticall, antispam, antitroli, backup, jadibot, grouponly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockstring(_uptime)
  let tags
  let teks = `${args[0]}`.tolowercase()
  let arraymenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arraymenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'utama',
    'game': 'game',
    'xp': 'exp & limit',
    'nsfw': `nsfw ${global.opts['nsfw'] ? '' : '(dinonaktifkan)'}`,
    'sticker': 'stiker',
    'edukasi': 'edukasi',
    'news': 'news',
    'kerang': 'kerang ajaib',
    'quotes': 'quotes',
    'admin': `admin ${global.opts['restrict'] ? '' : '(dinonaktifkan)'}`,
    'rpg': 'epic rpg',
    'group': 'grup',
    'anime': 'anime',
    'premium': 'premium',
    'internet': 'internet',
    'image': 'random image',
    'anonymous': 'anonymous chat',
    'nulis': 'magernulis & logo',
    'downloader': 'downloader',
    'tools': 'tools',
    'fun': 'fun',
    'database': 'database',
    'vote': 'voting',
    'absen': 'absen',
    'quran': 'islam',
    'audio': 'pengubah suara',
    'jadibot': 'jadi bot',
    'info': 'info',
    '': 'tanpa kategori',
  }
  if (teks == 'game') tags = {
    'game': 'game'
  }
  if (teks == 'xp') tags = {
    'xp': 'exp & limit'
  }
  if (teks == 'news') tags = {
    'news': 'news'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'hentai',
    'bokep': 'bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'epic rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'kerang ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `admin ${global.opts['restrict'] ? '' : '(dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'internet'
  }
  if (teks == 'image') tags = {
    'image': 'random image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'anonymous chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'magernulis & logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'fun'
  }
  if (teks == 'database') tags = {
    'database': 'database'
  }
  if (teks == 'vote') tags = {
    'vote': 'voting',
    'absen': 'absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'pengubah suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'jadi bot'
  }
  if (teks == 'info') tags = {
    'info': 'info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'tanpa kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'owner',
    'host': 'host',
    'advanced': 'advanced'
  }



  try {
    let package = json.parse(await fs.promises.readfile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xprange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getname(m.sender)
    let d = new date(new date + 3600000)
    let locale = 'id'
    // d.gettimezoneoffset()
    // offset -420 is 18.00
    // offset    0 is  0.00
    // offset  420 is  7.00
    let weton = ['pahing', 'pon', 'wage', 'kliwon', 'legi'][math.floor(d / 84600000) % 5]
    let week = d.tolocaledatestring(locale, { weekday: 'long' })
    let date = d.tolocaledatestring(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateislamic = intl.datetimeformat(locale + '-tn-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.tolocaletimestring(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new promise(resolve => {
        process.once('message', resolve)
        settimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockstring(_muptime)
    let uptime = clockstring(_uptime)
    let totalreg = object.keys(global.db.data.users).length
    let rtotalreg = object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: array.isarray(plugin.help) ? plugin.help : [plugin.help],
        tags: array.isarray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customprefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relaywamessage(conn.preparemessagefromcontent(m.chat, {
        "listmessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": `
⬣━〔 𝐈𝐍𝐅𝐎 〕━⬣
⬡ aktif selama ${uptime}
⬡ baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
⬡ *${object.keys(global.db.data.users).length}* pengguna
⬡ *${totaljadibot.length}* jadibot
⬡ *${conn.blocklist.length}* terblock
⬡ *${object.entries(global.db.data.chats).filter(chat => chat[1].isbanned).length}* chat terbanned
⬡ *${object.entries(global.db.data.users).filter(user => user[1].banned).length}* pengguna terbanned
╰────────────⬣
`.trim(),
          "buttontext": "klik disini",
          "listtype": "single_select",
          "sections": [
            {
              "rows": [{
                                    "title": "|⚙️| 𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓",
                                    "description": "status dan informasi bot.",
                                    "rowid": ".botstatus"
                                }, {
                                    "title": "|❗| 𝐑𝐔𝐋𝐄𝐒",
                                    "description": "user yang bijak selalu mematuhi rules.",
                                    "rowid": ".rules"
                                }, {
                                    "title": "|👑| 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓 & 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
                                    "description": "untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowid": ".sewa"
                                }],
                                "title": "⟣──────❲ tentang bot dan lainnya ❳───────⟢"
                            }, {
                                "rows": [{
                                    "title": `[🧾| 𝐒𝐄𝐌𝐔𝐀 𝐏𝐄𝐑𝐈𝐍𝐓𝐀𝐇`,
                                    "description": "memberikan semua fitur bot",
                                    "rowid": ".? all"
                                }, { 
                                    "title": "|🕋| 𝐈𝐒𝐋𝐀𝐌",
                                    "description": "menu tentang islam",
                                    "rowid": ".? quran"
                                }, { 
                                    "title": "|🏫| 𝐄𝐃𝐔𝐊𝐀𝐒𝐈",
                                    "description": "menu edukasi",
                                    "rowid": ".? edukasi"
                                }, { 
                                    "title": "|📰| 𝐍𝐄𝐖𝐒",
                                    "description": "menu berita",
                                    "rowid": ".? news"
                                }, { 
                                    "title": "|🎮| 𝐆𝐀𝐌𝐄",
                                    "description": "menu game",
                                    "rowid": ".? game"
                                }, { 
                                    "title": "|🗺️| 𝐄𝐏𝐈𝐂 𝐑𝐏𝐆",
                                    "description": "menu game rpg",
                                    "rowid": ".? rpg"
                                }, { 
                                    "title": "|📈| 𝐗𝐏",
                                    "description": "xp dan level",
                                    "rowid": ".? xp"
                                }, { 
                                    "title": "|🔞| 𝐍𝐒𝐅𝐖",
                                    "description": "menu bokep",
                                    "rowid": ".? nsfw"
                                }, { 
                                    "title": "|🖼️| 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄",
                                    "description": "menu foto random",
                                    "rowid": ".? image"
                                }, { 
                                    "title": "|🎇| 𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
                                    "description": "menu buat stiker",
                                    "rowid": ".? stiker"
                                }, { 
                                    "title": "|🐚| 𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁",
                                    "description": "menurut kerang ajaib....",
                                    "rowid": ".? kerangajaib"
                                }, { 
                                    "title": "|📑| 𝐐𝐔𝐎𝐓𝐄𝐒",
                                    "description": "menu quotes",
                                    "rowid": ".? quotes"
                                }, { 
                                    "title": "|🏛️| 𝐀𝐃𝐌𝐈𝐍",
                                    "description": "menu admin group",
                                    "rowid": ".? admin"
                                }, { 
                                    "title": "|🏢| 𝐆𝐑𝐔𝐁",
                                    "description": "menu group",
                                    "rowid": ".? grup"
                                }, { 
                                    "title": "|🔝| 𝐏𝐑𝐄𝐌𝐈𝐔𝐌",
                                    "description": "menu untuk premium",
                                    "rowid": ".? premium"
                                }, { 
                                    "title": "|🖥️| 𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓",
                                    "description": "cari sesuatu di bot",
                                    "rowid": ".? internet"
                                }, { 
                                    "title": "|🥷| 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒",
                                    "description": "mainkan anonymous chat",
                                    "rowid": ".? anonymous"
                                }, { 
                                    "title": "|✒️| 𝐍𝐔𝐋𝐈𝐒 & 𝐋𝐎𝐆𝐎",
                                    "description": "menu nulis & logo",
                                    "rowid": ".? nulis"
                                }, { 
                                    "title": "|📺| 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑",
                                    "description": "download sesuatu di bot",
                                    "rowid": ".? downloader"
                                }, { 
                                    "title": "|🔧| 𝐓𝐎𝐎𝐋𝐒",
                                    "description": "tools yang bisa di gunakan di bot",
                                    "rowid": ".? tools"
                                }, { 
                                    "title": "|🎇| 𝐅𝐔𝐍",
                                    "description": "menu ceria",
                                    "rowid": ".? fun"
                                }, { 
                                    "title": "|📂| 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄",
                                    "description": "simpan sesuatu di bot",
                                    "rowid": ".? database"
                                }, { 
                                    "title": "|📝| 𝐕𝐎𝐓𝐄 & 𝐀𝐁𝐒𝐄𝐍",
                                    "description": "menu vote & absen",
                                    "rowid": ".? vote"
                                }, { 
                                    "title": "|🎙️| 𝐏𝐄𝐍𝐆𝐔𝐁𝐀𝐇 𝐒𝐔𝐀𝐑𝐀",
                                    "description": "ubah suaramu",
                                    "rowid": ".? audio"
                                }, { 
                                    "title": "|🤖| 𝐉𝐀𝐃𝐈𝐁𝐎𝐓",
                                    "description": "jadi bot",
                                    "rowid": ".? jadibot"
                                }, { 
                                    "title": "|⛩️| 𝐀𝐍𝐈𝐌𝐄",
                                    "description": "cari anime di bot",
                                    "rowid": ".? anime"
                                }, { 
                                    "title": "|ℹ️| i𝐈𝐍𝐅𝐎",
                                    "description": "info 𝐀tentang bot",
                                    "rowid": ".? info"
                                }, { 
                                    "title": "𝐓𝐀𝐍𝐏𝐀 𝐀𝐊𝐀𝐓𝐄𝐆𝐎𝐑𝐈",
                                    "description": "",
                                    "rowid": ".? tanpakategori"
                                }, { 
                                    "title": "|🧑‍💻| 𝐎𝐖𝐍𝐄𝐑",
                                    "description": "menu khusu owner",
                                    "rowid": ".? owner"
                                }],
                                "title": "⟣───────────❲  all-menu  ❳───────────⟢"
                            }, {
                                "rows": [{
                                    "title": "|👤| 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓",
                                    "description": "pemilik Wan Bot",
                                    "rowid": ".owner"
                                }, {
                                    "title": "|💰| 𝐃𝐎𝐍𝐀𝐒𝐈",
                                    "description": "jangan lupa donasi untuk mendukung bot agar aktif selalu",
                                    "rowid": ".donasi"
                                }, {
                                    "title": "|💌| 𝐊𝐀𝐓𝐀 𝐏𝐄𝐍𝐔𝐓𝐔𝐏",
                                    "description": "terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nnote: chat p/main² tidak akan di respon(user bisa terkena banned/block)",
                                    "rowid": ".creator"
                                }, {
                                    "title": "|❤️| 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎",
                                    "description": "terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                    "rowid": ".tqto"
                                }],
                                "title": "⟣───────────❲ penutup ❳────────────⟢"
                            }
                        ], "contextinfo": 
						{ "stanzaid": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remotejid": "6283136505591-1614953337@g.us",
                        "quotedmessage": m.message
						}
                    }
                 }, {}), {waitforack: true})
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 daftar menu 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultmenu.before
    let header = conn.menu.header || defaultmenu.header
    let body = conn.menu.body || defaultmenu.body
    let footer = conn.menu.footer || defaultmenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultmenu.after
    let _text = [
      before,
      ...object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(limit)' : '')
                .replace(/%ispremium/g, menu.premium ? '(premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `siap untuk *${_p}levelup*` : `${max - exp} xp lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateislamic, time, totalreg, rtotalreg, role,
      readmore: readmore
    }
    text = text.replace(new regexp(`%(${object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2buttonloc(m.chat, await(await fetch(fla + teks)).buffer(), text.trim(), `runtime : ${uptime}\n${week} ${date}`, 'pemilik bot', `${_p}owner`, 'donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(\?|menu|help)$/i

handler.register = true

module.exports = handler

const more = string.fromcharcode(1)
const readmore = more.repeat(1)

function clockstring(ms) {
  let h = isnan(ms) ? '--' : math.floor(ms / 3600000)
  let m = isnan(ms) ? '--' : math.floor(ms / 60000) % 60
  let s = isnan(ms) ? '--' : math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.tostring().padstart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('asia/jakarta').format('hh')
  res = "selamat dinihari🌃"
  if (time >= 4) {
    res = "selamat pagi🌄"
  }
  if (time > 10) {
    res = "selamat siang🌄"
  }
  if (time >= 15) {
    res = "selamat sore🌇"
  }
  if (time >= 18) {
    res = "selamat malam🌉"
  }
  return res
}
