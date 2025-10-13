const express = require("express")
const http = require("http")
const path = require("path")
const fs = require("fs")

const app = express()
const server = http.createServer(app)

const port = 8095

app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => res.sendFile("index.html"))
app.post("/")

server.listen(port, () => console.log(`http://localhost:${port}`))