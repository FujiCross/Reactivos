const express = require("express")
const http = require("http")
const path = require("path")
const fs = require("fs")

const app = express()
const server = http.createServer(app)

const port = 8095

const reactivosJson = path.join(__dirname, "/data", "/reactivos.json")

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
        //res.sendStatus(200).send({message: "Saved"})

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

server.listen(port, () => console.log(`http://localhost:${port}`))