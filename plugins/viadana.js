let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Tng
╠➥ 0139407383
║➥ Jika berminat jadibot chat no.dibawah
║- wa.me/60189830350
║ 
╠═ © LanXzy & LynXzy
╠═ Thanks
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viatng$/i

module.exports = handler
