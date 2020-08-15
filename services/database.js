const CONFIG = require('../config.json');
const Sequelize = require('sequelize');

console.debug('DB name:', CONFIG.MySQL_db);
console.debug('DB host:', CONFIG.MySQL_host);

const db = new Sequelize(CONFIG.MySQL_db, CONFIG.MySQL_user, CONFIG.MySQL_pass, {
    host: CONFIG.MySQL_host,
    dialect: "mysql",
});

db.authenticate()
    .then(() => console.log('Connection to DB has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err.message))

module.exports = db;
