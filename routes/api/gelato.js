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
		.then(data => res.status(200).json({
			data, 
			message: 'Es krim berhasil diambil',
			success: true
		}))
		.catch(err => res.status(500).json({message: err.message, status: false}))
})

router.post('/', upload.single('image'), (req,res) => {

	const image = req.file ? req.file.filename : ''

	const data = {
		id: uuidv5(req.body.name, uuidv5.URL),
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		description: req.body.description,
		image: image
	}

	Gelatos.addGelato(data)
		.then(result => {
			return res.status(200).json({
				data, 
				message: 'Es krim berhasil ditambahkan',
				success: true
			})
		})
		.catch(err => res.status(500).json({message: err.message, status: false}))
})

router.delete('/:id', (req,res) => {

	const id = req.params.id

	Gelatos.deleteGelato(id)
		.then(result => {
			if(result.affectedRows === 0){
				return Promise.reject({message:'ID not found', success: false})
			}
			return res.status(201).json({id, status: true})
		})
		.catch(err => res.status(500).json({message: err.message, status: false}))
})

router.put('/', upload.single('image'),(req,res) => {
	
	const image = req.file ? req.file.filename : ''

	const data = {
		id: req.body.id,
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
		description: req.body.description,
		image: image
	}

	Gelatos.updateGelato(data)
		.then(result => {
			if(result.affectedRows === 0){
				return Promise.reject({message:'ID not found', success: false})
			}
			return res.status(201).json({data, success: true})
		})
		.catch(err => res.status(500).json({message: err.message, status: false}))
})

module.exports = router