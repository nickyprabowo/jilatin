const mysql = require('mysql')
const db = require('../config/dbConnection')

const gelato = {
	getGelato: () => new Promise((resolve, reject) => {
		let sql = 'SELECT id, name, quantity, description, image, price FROM gelato'
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err);
			return resolve(result);
		})
	}),

	addGelato: data => new Promise((resolve, reject) => {
		// having hard time because of quote(') on values
		let sql = `INSERT INTO gelato (id, name, quantity, description, image) 
					VALUES ('${data.id}','${data.name}',${data.quantity},'${data.description}','${data.image}')`
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err)
			return resolve(result);
		})
	}),

	deleteGelato: id => new Promise((resolve, reject) => {
		let sql = "DELETE FROM gelato WHERE id='" + id + "'"
		console.log(sql)
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err);
			return resolve(result);
		})
	}),

	updateGelato: (data) => new Promise((resolve,reject) => {
		let sql = `UPDATE gelato SET name = ${data.name}, quantity = ${data.quantity}, price = ${data.price}, description = ${data.description}, image = ${data.image} WHERE id = ${data.id}`
		db.query(sql, (err, result, fields) => {
			if(err) return reject(err);
			return resolve(result);
		})
	})
}

module.exports = gelato