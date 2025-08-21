const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "rlxgiYhC#KL1X6BoTW65I56jhv1Pz5KlfWXl1G1hRSxB8rMkSc_I",
  MONGODB: process.env.MONGODB || "mongodb://mongo:dEWKdvKXbwiHuEZQWIrzrsBshdhcXwNE@switchyard.proxy.rlwy.net:34712",
  OWNER_NUM: process.env.OWNER_NUM || "593978619941",
};
