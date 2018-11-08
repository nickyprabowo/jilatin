const mysql = require('mysql')
const db = require('../config/dbConnection')

const gelato = {
	getGelato: () => new Promise((resolve, reject) => {
		let sql = 'SELECT name, quantity, description, image, price FROM gelato'
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err);
			return resolve(result);
		})
	}),

	addGelato: (data) => new Promise((resolve, reject) => {
		// having hard time because of quote(') on values
		let sql = `INSERT INTO gelato (id, name, quantity, description, image) 
					VALUES ('${data.id}','${data.name}',${data.quantity},'${data.description}','${data.image}')`
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err)
			return resolve(result);
		})
	}),

	deleteGelato: (id) => new Promise((resolve, reject) => {
		let sql = `DELETE FROM gelato WHERE id=${id}`
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err);
			return resolve(result);
		})
	})

	// not yet solved
	/*getGelatos: () => {
		let sql = 'SELECT name, quantity FROM gelato'
		db.query(sql, (err, result, fields) => {
			if(err) throw err;
			result;
		})
	}*/
}

module.exports = gelato