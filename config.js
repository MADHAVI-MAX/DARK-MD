const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "k3tFhDBL#xaDrvKjQYR5eTuvDw6GW5JsZPL2LJ5Qym38VRZxpcbY",
  MONGODB: process.env.MONGODB || "mongodb://mongo:NPetnAtbinOvDTWfJyjhzKUfWjbOWrfg@gondola.proxy.rlwy.net:10102",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
};
