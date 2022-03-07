let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Boost
║➥ 0139407383
║- Ingin jadibot?Chat dibawah
║- wa.me/60189830350
║
╠═ © Wan & Wan Promoter
╠═ Thanks✨
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viaboost$/i

module.exports = handler
