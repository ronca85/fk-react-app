const express = require("express")
const app = express()

// single endpoint
app.get("/", (req, res) => {
	res.end("foo")
})

module.exports = app
