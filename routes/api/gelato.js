const express = require('express')
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
		.then(result => res.status(200).json(result))
		.catch(err => res.status(500).json(err))
})

router.post('/', upload.single('image'), (req,res) => {
	const data = {
		id: uuidv5(req.body.name, uuidv5.URL),
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		description: req.body.description,
		image: req.file.filename
	}

	Gelatos.addGelato(data)
		.then(result => res.status(200).json(data))
		.catch(err => res.status(500).json({'message':err}))
})

router.delete('/:id', (req,res) => {

	const id = req.params.id

	Gelatos.deleteGelato(id)
		.then(result => res.status(201).json({id}))
		.catch(err => res.status(500).json({'message':err}))
})

router.put('/', upload.single('image'),(req,res) => {

	const data = {
		id: req.body.id,
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		description: req.body.description
	}

	Gelatos.updateGelato(data)
		.then(result => res.status(201).json({data, 'success':true }))
		.catch(err => res.status(500).json({'message': err}))
})

module.exports = router