const express = require('express');
const port = 8000;
const app = express();
const db = require('./database/connect');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.get("/product", (req, res) => {
    db.query("SELECT * FROM tbl_tutorial", (error, result) => {
        res.send(result);
    })
})

app.get("/makanan", (req, res) => {
    db.query("SELECT * FROM tbl_product WHERE id_type = 1", (error, result) => {
        res.send(result);
    })
})

app.get("/minuman", (req, res) => {
    db.query("SELECT * FROM tbl_product WHERE category_product = 2", (error, result) => {
        res.send(result);
    })
})

app.get("/etc", (req, res) => {
    db.query("SELECT * FROM tbl_product WHERE category_product = 3", (error, result) => {
        res.send(result);
    })
})

app.listen(port, function(err){
    if (err) console.log(err);
    console.log(`Listening on port : ${port}`);
})