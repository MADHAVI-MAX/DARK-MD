const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "BfgpLeUyZiZfQe6Er5HMclpFzIdkBDSozAddvLNvz3JW",
  MONGODB: process.env.MONGODB || "mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
};
