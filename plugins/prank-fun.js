const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Realistic and stylish fake hacking simulation.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, isOwner, reply 
}) => {
    try {
        if (!isOwner) {
            return reply("⛔ Only the *bot owner* can run this command.");
        }

        const steps = [
            '🧠 *Booting NEXI MD OS v9.8.3...*',
            '💻 Connecting to the cyber grid...',
            '🔍 Target locked: _Accessing private node..._',
            '📡 Establishing connection to secure mainframe...',
            '🧬 Injecting malware... [OK]',
            '⚙️ Deploying brute-force algorithms...',
            '🔓 🔓 Bypassing firewall... [SUCCESS]',
            '📂 Accessing encrypted files...',
            '📁 Downloading credentials: [admin.passwd]...',
            '⌛ Cracking SHA-256 hash... [████░░░░░░░░░░] 23%',
            '⌛ Cracking SHA-256 hash... [███████████░░░] 67%',
            '⌛ Cracking SHA-256 hash... [██████████████] 100%',
            '📬 Sending payload to control node...',
            '💾 Saving data to /root/asuna/leak.log',
            '📤 Uploading to darkweb database...',
            '🎯 Breach successful!',
            '🌐 Target is now fully compromised.',
            '👾 Activating self-destruct protocol in 3... 2... 1...',
            '💥 *Trace erased.*',
            '🧪 All evidence deleted. You were never here.',
            '✅ *NEXI MD HACKING COMPLETE!* ☣️',
            '⚠️ _Note: This is a fake simulation for fun. Do not take it seriously._'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1s delay for realism
        }

    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
