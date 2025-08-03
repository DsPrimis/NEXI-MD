const { cmd } = require("../command");
const { sleep } = require("../nexi/functions");

cmd({
    pattern: "restart",
    desc: "Restart NEXI MD",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { reply, isCreator }) => {
    try {
        if (!isCreator) {
            return reply("⛔ Only *Queen Asuna's owner* can use this command.");
        }

        const { exec } = require("child_process");

        await reply("♻️ *Restarting system modules...*");
        await sleep(1000);
        await reply("⚙️ *Shutting down NEXI MD...*");
        await sleep(1000);
        await reply("💻 *Rebooting AI core... Please wait.*");
        await sleep(1000);
        await reply("✅ *NEXI MD is restarting now...*");

        exec("pm2 restart all");

    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
