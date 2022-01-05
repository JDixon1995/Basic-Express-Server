const express = require('express')
const path = require('path')

const app = express()

PORT = process.env.PORT || 8080

app.listen(PORT)

console.log(`Server running on port ${PORT}`)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "frontEndFiles", "index.html"))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "frontEndFiles", "about.html"))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "frontEndFiles", "contact.html"))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontEndFiles", "404.html"))
})