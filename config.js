const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "MyMgQbQD#EcLcSXTBafAIXemUmV5Org78RO3mEvgDyiIXNFTQlFk",
  MONGODB: process.env.MONGODB || "mongodb://mongo:HmHxzbrVltwByynNERwjepSnTdtzqMhk@maglev.proxy.rlwy.net:10333",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
};
