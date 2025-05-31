const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "trdzADTJ#VrSeO7lmqef-zZatocx-_w8IflodWh2yaBriELVK8qk",
  MONGODB: process.env.MONGODB || "mongodb://mongo:NPetnAtbinOvDTWfJyjhzKUfWjbOWrfg@gondola.proxy.rlwy.net:10102",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
};
