var mysql = require('mysql');

var conexion = mysql.createConnection({
host: 'localhost',
database: 'catalogo',
user: 'root',
password: 'AaBc1234'
});

// conexion.connect(function(error){
//     if(error){
//         throw error
//     }else{
//         console.log('conexion exitosa');
//     }
// });

conexion.query('SELECT * from articulo', function(error, results,fields){
    if(error)
        throw error;

    // results.forEach(result => {
    //     console.log(result);
    // });
    console.log(JSON.stringify(results));
    
})

conexion.end();