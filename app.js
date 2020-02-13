//Config to connect MySql
//tham khảo: https://www.sitepoint.com/using-node-mysql-javascript-client/
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',              //localhost
    user:'root',                    //username
    password:'',                    //pass
    database:'db_ecommerce'         //Db_name
});
//Connect
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //----create DATABASE db_ecommerce
    
    // //connection.query("CREATE DATABASE db_ecommerce",(err, result) => {
    //   if (err) throw err;
    //   console.log("Database created successfully");
    // });
});
  
//--close DB
// connection.end((err)=>{
//     if (err) throw err;
//     console.log('Closed !!!');
// });

  
