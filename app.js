const express = require("express")
const mysql = require("mysql")

// create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'PeacePaul@123',
    database : 'nodemysqls'
})

// connect 
db.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Mysql connected...")
})

const app = express()

// create DB
app.get("/createDb", (req, res) => {
    let sql = 'CREATE DATABASE nodemysqls';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send("Database created...")
    })
})

app.get("/create-post-table", (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))'
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send("Post table created...")
    })
})

app.listen("3000", () => {
    console.log("Server running")
})