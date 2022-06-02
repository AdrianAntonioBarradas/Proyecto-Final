const express =require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//MySQL
const pool = mysql.createPool({
    connectionLimit     : 10,
    host                : 'localhost',
    database            : 'escuela',
    user                : 'administracion',
    password            : '12345'
});

//Get all alumnos
app.get('/getalumnos', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err){
            throw err
        }else{
            console.log(`conexion con id ${connection.threadId}`)
        }
        connection.query('SELECT a.id_alumno, p.nombre, p.apellido_p, p.apellido_m, p.curp, p.fecha_nac, p.genero, a.generacion '+
                    'FROM persona p '+
                    'RIGHT JOIN alumno a ON p.id_persona = a.id_persona', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        });
    })
})

app.get('/getusuarios', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err){
            throw err
        }else{
            console.log(`conexion con id ${connection.threadId}`)
        }
        connection.query('SELECT * FROM usuario', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        });
    })
})

app.get('/getprofesores', (req, res) => {
    pool.getConnection((err, connection) =>{
        if(err){
            throw err
        }else{
            console.log(`conexion con id ${connection.threadId}`)
        }
        connection.query('SELECT pr.id_profesor, p.nombre, p.apellido_p, p.apellido_m, p.curp, p.fecha_nac, p.genero, pr.cedula, pr.telefono ,pr.correo '+
                    'FROM persona p '+
                    'RIGHT JOIN profesor pr ON p.id_persona = pr.id_persona', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        });
    })
})


//Listen on enviroment port or 5000
app.listen(port, ()=> console.log(`Listen on port ${port}`))
