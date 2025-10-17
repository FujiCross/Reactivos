const express = require("express")
const http = require("http")
const path = require("path")
const fs = require("fs")

const app = express()
const server = http.createServer(app)

const port = 8095

const reactivosJson = path.join(__dirname, "/data", "/reactivos.json")
const practicasJson = path.join(__dirname, "/data", "/practicas.json")

app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => res.sendFile("index.html"))

app.post("/save_reactivo", (req, res) => {
    const data = req.body
    console.log(data)

    try {
        const dataRaw = fs.readFileSync(reactivosJson, { encoding: "utf-8" })
        const arrayExistence = JSON.parse(dataRaw)

        arrayExistence.push(data)

        fs.writeFileSync(reactivosJson, JSON.stringify(arrayExistence, null, 2))

    } catch(err) {
        console.log(err)
    }
})

app.post("/get_reactivos", (req, res) => {
    try {
        const reactivos = fs.readFileSync(reactivosJson, { encoding: "utf-8" })
        res.send(JSON.parse(reactivos))

    } catch(err) {
        console.log(err)
    }
})

app.post("/edit_reactivo", (req, res) => {
    const data = req.body

    try {
        const dataRaw = fs.readFileSync(reactivosJson, { encoding: "utf-8" })
        const arrayExistence = JSON.parse(dataRaw)

        const index = arrayExistence.findIndex(reactivo => reactivo.nombre === data.old_nombre)

        if(index !== -1) {
            arrayExistence[index] = {
                ...arrayExistence[index],
                ...data
            }

            fs.writeFileSync(reactivosJson, JSON.stringify(arrayExistence, null, 2))
        }

    } catch(err) {
        console.log(err)
    }
})

app.post("/delete_reactivo", (req, res) => {
    const data = req.body

    try {
        const rawData = fs.readFileSync(reactivosJson, { encoding: "utf-8" })
        const array = JSON.parse(rawData)

        const index = array.findIndex(reactivo => reactivo.nombre === data.nombre)

        if(index !== -1) {
            array.splice(index, 1)
            fs.writeFileSync(reactivosJson, JSON.stringify(array, null, 2))
        }

        res.sendStatus(200)

    } catch(err) {
        console.log(err)
        res.sendStatus(403)
    }
})

app.post("/delete_practica", (req, res) => {
    const data = req.body

    try {
        const rawData = fs.readFileSync(practicasJson, { encoding: "utf-8" })
        const array = JSON.parse(rawData)

        const index = array.findIndex(practica => practica.nombre === data.nombre)
        console.log(data.nombre)

        if(index !== -1) {
            array.splice(index, 1)
            fs.writeFileSync(practicasJson, JSON.stringify(array, null, 2))
        }

        res.sendStatus(200)

    } catch(err) {
        console.log(err)
        res.sendStatus(403)
    }
})

app.post("/add_practica", (req, res) => {
    const data = req.body

    try {
        const dataRaw = fs.readFileSync(practicasJson, { encoding: "utf-8" })
        const arrayExistence = JSON.parse(dataRaw)

        arrayExistence.push(data)

        fs.writeFileSync(practicasJson, JSON.stringify(arrayExistence, null, 2))

    } catch(err) {
        console.log(err)
    }
})

app.post("/get_practicas", (req, res) => {
    try {
        const practicas = fs.readFileSync(practicasJson, { encoding: "utf-8" })
        res.send(JSON.parse(practicas))

    } catch(err) {
        console.log(err)
        res.sendStatus(403)
    }
})

server.listen(port, () => console.log(`http://localhost:${port}`))
