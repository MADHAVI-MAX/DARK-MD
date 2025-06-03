const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "wj02hR5a#M7QglRzkW5yhEZqTKXy3otp_2a08GuF_vfr9f745iWM",
  OWNER_NUM: process.env.OWNER_NUM || "94772906743",
};
