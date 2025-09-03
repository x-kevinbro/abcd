const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=RMxGSQpY#dYTR15u66EaDU5qNMBwriEjAALSekeGb7jJVtGM5zbg' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8080" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "kevin" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://xkevin:Dam@123%@188.166.191.216:5432/my_new_database' : process.env.POSTGRESQL_URL,
};
