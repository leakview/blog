const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//motor de plantilla de express "EJS"
app.set('view engine', 'ejs')
app.set('views' + __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("first");
})

app.get('/resumen', (req, res) => {
    res.render("index");
})

app.get('/caso1', (req, res) => {
    res.render("caso1");
})

app.get('/caso2', (req, res) => {
    res.render("caso2");
})

app.get('/first', (req, res) => {
    res.render("first");
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