const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "getmenu",
    alise: ["menu"],
    desc: "Obtener lista de comandos",
    category: "main",
    filename: __filename,
  },
  async (
    iipv,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `Hola ${pushname}

📋 *COMANDOS DISPONIBLES*

🔹 *PRINCIPALES*
    • .alive
    • .menu

🔹 *DESCARGAS*

🔹 *GRUPOS*
${menu.group}

🔹 *PROPIETARIO*
    • .restart
    • .update

🔹 *CONVERSIÓN*
    • .sticker <responder imagen>
    
🔹 *BÚSQUEDA*
${menu.search}

> Menú de IIPV
`;
      await iipv.sendMessage(
        from,
        {
          image: {
            url: "https://i.ibb.co/cHQVV28/IIPV-MENU.png",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);