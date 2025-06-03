const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "wj02hR5a#M7QglRzkW5yhEZqTKXy3otp_2a08GuF_vfr9f745iWM",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/MADHAVI-MAX/BOT-HELPER/refs/heads/main/ALIVE.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n😎MADE BY LAKSHAN😎",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
};
