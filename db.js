const mysql = require('mysql');
const dbconfig = {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'search-bot'
}
const db = mysql.createConnection(dbconfig);
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database ' + dbconfig.host + ': ' + err.message)
    } else {
        console.log('connecting successfully to database ' + dbconfig.host + ': ' + dbconfig.user);
    }
    
})

module.exports = db;