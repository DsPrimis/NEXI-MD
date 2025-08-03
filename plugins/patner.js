const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "patner",
    alias: ["thanks", "dev"],
    desc: "Thanks to the tech team and developers",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const user = m.sender.split("@")[0];
        const message = `
╭━━━〔 🤝 ᴛᴇᴄʜɴɪᴄᴀʟ ᴘᴀʀᴛɴᴇʀꜱ 〕━━━┈⊷
┃ 👨‍💻 *ᴅs ᴘʀɪᴍɪs* - Lead Dev
┃ 👨‍💻 *ᴢᴇᴘʜʏʀ* - Co Dev
┃ 👨‍💻 *ᴋᴇᴇᴠᴇ* - Support Eng
┃ 👨‍💻 *ɴɪɴᴊᴀxx* - Friend
┃ 👨‍💻 *ᴅᴇᴠ ᴄᴇɴᴛᴇʀ* - Team¹
┃ 👨‍💻 *404 ᴅᴇᴠs ғᴏᴜɴᴅ* - Team²
┣━━━━━━━━━━━━━━━━━━━━━
┃ 🤖 *Bot Name:* NEXI MD
┃ 🙋‍♂️ *Hello @${user}*
╰━━━〔 💖 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴛʜᴇ ꜱᴜᴘᴘᴏʀᴛ! 〕━━━┈⊷
🛠 *Powered by DS PRIMIS*
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/p1xybt.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419474272514@newsletter',
                    newsletterName: 'NEXI MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `❌ Error: ${err.message}` }, { quoted: mek });
    }
});
