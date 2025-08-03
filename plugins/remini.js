const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const { cmd } = require("../command");

cmd({
  pattern: "remini",
  react: "🖼️",
  desc: "Améliore la qualité d'une image",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, mime, reply }) => {
  try {
    const target = quoted ? quoted : m;
    const mimetype = target.mimetype || mime;

    if (!/image\/(jpe?g|png)/.test(mimetype)) {
      return reply("❎ Please reply with an image *or send an image* with the `.remini` command.");
    }

    reply("♻️ *Image processing...*");

    const path = await conn.downloadAndSaveMediaMessage(target);

    const form = new FormData();
    form.append("image", fs.createReadStream(path));

    const response = await axios.post("https://api.hardianto.xyz/ai/remini", form, {
      headers: {
        ...form.getHeaders(),
        apikey: "hardianto" // Clé gratuite publique
      }
    });

    fs.unlinkSync(path); // Supprimer le fichier temporaire

    if (!response.data || !response.data.status) {
      return reply("❌ Erreur lors de l'amélioration de l'image.");
    }

    await conn.sendMessage(from, {
      image: { url: response.data.result },
      caption: "✅ *Image successfully improved !\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*"
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply("⚠️ An error has occurred. Please check that the image is valid.");
  }
});
  
