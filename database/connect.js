const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhosst",
    user: "root",
    password: "",
    database: "db_w4learn",
})

module.exports = db;