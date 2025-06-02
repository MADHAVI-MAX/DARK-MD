const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd({
    pattern: "menu",
    alise: ["getmenu"],
    react: "🏚️",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
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

      let madeMenu = `👋 *හායි ලස්සන ළමයෝ  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️
    ▫️
    ▫️
| *DOWNLOAD COMMANDS* |
    ▫️
    ▫️
    ▫️
| *GROUP COMMANDS* |
${menu.group}
| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️
    ▫️
    ▫️
    ▫️
| *SEARCH COMMANDS* |
${menu.search}


🥶𝐌𝐚𝐝𝐞 𝐛𝐲 🔱M_A_D_H_A_V_I🔱🥶

> MADHAVI MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/MADHAVI-MAX/BOT-HELPER/refs/heads/main/DFJ.jpg",
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
