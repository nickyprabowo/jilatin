const express = require('express')
const cors = require('cors')
const router = express.Router()
const uuidv5 = require('uuid/v5')
const multer = require('multer') // this is needed to parse form data
//Gelato model
const Gelatos = require('../../models/gelato_m')

const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads/')
	},
	filename: function(req, file, cb){
		const now = new Date().toISOString()
		const date = now.replace(/:/g, '-')
		cb(null,  date + file.originalname)
	}
})

const upload = multer({storage: storage})

router.get('/', (req,res) => {
	Gelatos.getGelato()
		.then(result => res.json(result))
		.catch(err => res.json(err))
})

router.post('/', upload.single('image'), (req,res) => {
	const data = {
		id: uuidv5(req.body.name, uuidv5.URL),
		name: req.body.name,
		quantity: req.body.quantity,
		description: req.body.description,
		image: req.file.filename
	}

	Gelatos.addGelato(data)
		.then(result => res.json(result))
		.catch(err => res.json(500, {'message':err}))
})

router.delete('/', (req,res) => {

})

module.exports = router