const express = require('express')
//routes
const gelato = require('./routes/api/gelato')

const app = express()
// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// handle CORS
// basically, browser would not allow a request from different origin.
// so give additional header that tells browser to ignore cross origin restriction
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*") // allow request from anywhere
	res.header("Access-Control-Allow-Headers", 
		"Origin, X-Requested-With, Content-Type, Authorization, Accept"
	) // Any kind of headers to be allowed
	if(req.method == "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
		return res.json(200, {})
	} // options is preflight request to check if the request made is allowed 
	next() // pass all the thing to the next middleware
})

app.use(express.static('uploads'))

// Application routes
app.use('/api/gelato', gelato)

// handling unavailable route
app.use((req, res, next) => {
	const error = new Error('Not Found')
	error.status = 404
	next(error)
})
// handle error
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		message: error.message
	})
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log('server run on port '+port))