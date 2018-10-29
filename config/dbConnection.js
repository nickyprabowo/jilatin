const mysql = require('mysql')
// Create DB Connection
const db = require('./var').db_credentials

const connectToDB = mysql.createConnection(db)

connectToDB.connect(err => {
	if(err) throw err;
	console.log('Connected to Database')
})

module.exports = connectToDB