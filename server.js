const express = require('express')
const mysql = require('mysql')

const app = express()
app.use(express.json())

//MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'nodejs_mysql_reactvite'
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MSQL database',err)
        return;
    }
    console.log('MySQL successfully connected!');
})

// Create Routes
//Read
app.get("/listcourse", async (req, res) =>{
    try {
        connection.query("SELECT * FROM course_thailand ", (err, result, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(result)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.listen(3000, () => console.log('Server is running on port 3000'))