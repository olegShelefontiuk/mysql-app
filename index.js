const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config")
const app = express()
// const mysql = require('mysql2')
const customerRoutes = require('./server/routes/customer.routes')
const path = require("path");


// const pool = mysql.createPool({
//     connectionLimit: 5,
//     host: "localhost",
//       user: "root",
//      password: "MyNewPass",
//      database: "pro",
//   // insecureAuth : true
// })
// const sql = "INSERT INTO customers(email,name,message) VALUES ('Green@gmail.com', 'good123', 'day');"
//
// pool.query(sql, function(err, results) {
//     if (err) console.log(err);
//     console.log(results);
// })

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', customerRoutes)



if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static(path.join(__dirname, 'client','build')))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

// require("./app/routes/customer.routes.js")(app);

// set port, listen for requests

app.listen(config.port, () => {
    console.log(`Server is running on port.`, config.port);
});
