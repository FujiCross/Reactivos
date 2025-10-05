const express = require("express")
const http = require("http")
const path = require("path")
const fs = require("fs")

const app = express()
const server = http.createServer(app)

const port = 8095

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname + "/public")))

fs.readdir(path.join(__dirname, "/public"), (err, files) => {
    if(err) {
        console.log("Error al intentar leer los directorios:", err)
        return
    }

    files.forEach((n) => {
        app.get(`/${n.split(".")[0]}`, (req, res) => res.sendFile(path.join(__dirname, "/public", `/${n}`)))
    })
})

const reactivosJson = path.join(__dirname, "/data", "/reactivos.json")
const practicasJson = path.join(__dirname, "/data", "/practicas.json")

app.post("/save_reactivo", (req, res) => {
    const data = req.body
    data["cantidad"] = Number(data["cantidad"])

    try {
        const dataRaw = fs.readFileSync(reactivosJson, { encoding: "utf-8" })
        const arrayExistence = JSON.parse(dataRaw)

        arrayExistence.push(data)

        fs.writeFileSync(reactivosJson, JSON.stringify(arrayExistence, null, 2))
        res.sendStatus(200).send({message: "Guardado"})

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

app.post("/agregar_practica", (req, res) => {
    const data = req.body

    try {
        const dataRaw = fs.readFileSync(practicasJson, { encoding: "utf-8" })
        const arrayExistence = JSON.parse(dataRaw)

        arrayExistence.push(data)

        fs.writeFileSync(practicasJson, JSON.stringify(arrayExistence, null, 2))
        res.sendStatus(200).send({message: "Agregada"})

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

server.listen(port, () => console.log(`http://localhost:${port}`))