const express = require('express')
const { Router } = express
const router = Router()

let id = 1





/* router.get('/productos', function(req, res, next) {
    try {
        
    const data = {
        productos: productos,
        isEmpy: productos.length === 0,
        title: 'Coder House Ejs',
    }

    res.render('productos', data)
    } catch (error) {
        console.log(error)
    }
}) */


router.get('/', (req, res) => {
    try {
        const data = {
            title: 'Coder House Web Sockets',
        }
        res.render('index', data);
    } catch (error) {
        console.log(error);
    }
});





















/* router.post('/productos',   (req, res) => {
    const { title, price, thumbnail } = req.body
    console.log(req.body);
    const producto = { id: ++id, title, price, thumbnail }
    productos.push(producto)
    res.redirect('/')
}) */


/* router.get('/productos', (req, res) => {
    res.json(productos)
})

router.get('/productos/:id', (req, res) => {
    const { id } = req.params
    const producto = productos.find((producto) => producto.id == id)
    res.json(producto)
})


router.post('/productos',   (req, res) => {
    const { title, price, thumbnail } = req.body
    console.log(req.body);
    const producto = { id: ++id, title, price, thumbnail }
    productos.push(producto)
    res.json(producto)
    console.log(productos);
})

router.put('/productos/:id', (req, res) => {
    const { id } = req.params
    const { title, price, thumbnail } = req.body
    const producto = productos.find((producto) => producto.id == id)
    producto.title = title
    producto.price = price
    producto.thumbnail = thumbnail
    res.json(producto)
})

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params
    const producto = productos.find((producto) => producto.id == id)
    productos.splice(productos.indexOf(producto), 1)
    res.json(producto)
}) */


module.exports = router