const express = require('express');


const productRoutes = require('./routes/products/product.router');


const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(productRoutes);

const db = require('./database').getInstance();

db.setModels();


// // MYSQL2
// const connection = require('./database')
// app.post('/mysql', (req, res) => {
//     // connection.query(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`)

//     connection.query('SELECT * FROM product', (err, results) => {
//         res.json(results)
//     })
// })

app.listen(3002, ()=> {
    console.log('server has been started')
});


