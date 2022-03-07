let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ 1 hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Boost: 0139407383
Tng: 0139407383
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Bulan', description: "Rm25.00\nSewa bot tanpa batasan waktu.", rowId:".owner"},
        {title: '1 Bulan', description: "Rm20.00\nSewa bot selama 1 bulan.", rowId:".owner"},
        {title: '1 Minggu', description: "Rm5.00\nSewa bot selama 1 minggu.", rowId:".owner"},
        {title: '1 hari', description: "Rm0.00\nFree 1 hari.", rowId:".owner"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
