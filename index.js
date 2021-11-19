/**
 * create a simple REST server with express JS
 */

var Express = require("express");
const products = require("./products");

const app = Express();
const port = 3000;

//GET, POST, PUT, DELETE


/**
 * perform GET requests and retun a JSOn response
 */

app.get('/products/:id', (req, res) => {
    
    //return the entire array
    //res.json(products)

    //find a specific object
    res.json(products.find((p) => {
        return Number(req.params.id) === p.id;
    }))
    
})

app.listen(port, () => console.log('listening on port: ' + port))