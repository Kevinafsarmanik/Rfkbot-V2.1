let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Tng
╠➥ 0139407383
║➥ Ingin jadibot?Chat dibawah
║- wa.me/60189830350
║ 
╠═ © Wan & wan promoter
╠═ Thanks
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viatng$/i

module.exports = handler
