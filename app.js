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
  

//---Query -- Insert
// const author = { name: 'Craig Buckler', city: 'Exmouth' };
// connection.query('INSERT INTO authors SET ?', author, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

//Query -- Select -views
// connection.query('SELECT * FROM authors', (err,rows) => {
//     if(err) throw err;
  
//     console.log('Data received from DB:');
//     console.log(rows);
//     //--Trả DB qua vong lap theo gia tri
//     rows.forEach( (row) => {
//         console.log(`${row.name} lives in ${row.city}`);
//       });
//   });

// //--Query -- Update
// connection.query(
//     'UPDATE authors SET name = ? Where ID = ?',
//     ['sitePoint', 6],
//     (err, result) => {
//       if (err) throw err;
  
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );

// connection.query(
//     'DELETE FROM authors WHERE id = ?', [7], (err, result) => {
//       if (err) throw err;
  
//       console.log(`Deleted ${result.affectedRows} row(s)`);
//     }
//   );

  //--close DB
connection.end((err)=>{
    if (err) throw err;
    console.log('Closed !!!');
});
  
