const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantilla de express "EJS"
app.set('view engine', 'ejs')
app.set('views' + __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo: "mi titulo dinamico"});
})

app.get('/servicios', (req, res) => {
    res.render("servicios", {tservicios: "mi respueta desde servicios"});
})

app.get('/contacto', (req, res) => {
    res.render("contacto", {tcontacto: "mi respueta desde contacto"});
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "title", 
        descri: "ERROR"
    })
})

app.listen(port, () => {
    console.log('servidor', port); 
})



















































// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end("estoy repondiendo");
// })

// const puerto = 3000;
// server.listen(puerto, () => {
//     console.log("esperando solicitudes");
// })