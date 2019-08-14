//imports of dependencies
const db = require('..\\db\\dbApp')
const express = require('express')
const bodyParser = require('body-parser')
const port = 8081
const app = express()
app.use(bodyParser.urlencoded({extends: true}))

//GET
app.get('/allProducts', (req, res, next)=>{
    res.send(db.getProducts())
})

app.get('/show/:id', (req, res, next)=>{
    res.send(db.getProduct(req.params.id))
})

//POST
app.post('/allProducts', (req, res, next)=>{
    const product = db.saveMug({
        type: req.body.type,
        price: req.body.price
    })
    res.send(product) 
})

//PUT
app.put('/edit/:id', (req, res, next)=>{
    const product = db.saveMug({
        id: req.params.id,
        type: req.body.type,
        price: req.body.price
    })
    app.send(product)
})

//DELETE
app.delete('/del/:id', (req, res, next)=>{
    const product = db.getProduct(req.params.id)
    db.deleteProduct(req.params.id)
    res.send(product)
})

//LISTENER
app.listen(port)


