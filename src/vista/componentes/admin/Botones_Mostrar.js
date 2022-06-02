import {useState} from 'react';
import axios from 'axios';
import "./botones_style.css";


function Botones_Mostrar() {
  const [alumnos,updAl] = useState([]);
  const [profesores, updPro] = useState([]);
  
 

  const getAlumnos = async () => {
    try {
      // let formData = new FormData();
      const url = "http://localhost:5000/getalumnos";
      let result = await axios({
        url,
        method: "GET",
        dataType: "json",
        ContentType: "application/json",
        // data: formData
      });
      console.log(result.data);
      updAl( result.data);
      
      // return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const getProfesores = async () => {
    try {
      // let formData = new FormData();
      const url = "http://localhost:5000/getprofesores";
      let result = await axios({
        url,
        method: "GET",
        dataType: "json",
        ContentType: "application/json",
        // data: formData
      });
      console.log(result.data);
      updAl( result.data);
      
      // return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container-fluid presentation">
      <div className='row'>
        <div className='col-md-12'>
          <button className='btn btn-primary' onClick={getAlumnos}>Mostrar Alumnos</button>
          <button className='btn btn-success' onClick={getProfesores}>Mostrar Profesores</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table'>
              <thead>
                <tr>
                  <th colSpan={8} >Alumnos</th>
                </tr>
                <tr>
                  <th scope='col'> ID Alumno</th>
                  <th scope='col'> Nombre</th>
                  <th scope='col'> Apellido Paterno</th>
                  <th scope='col'> Apellido Materno</th>
                  <th scope='col'> Genero</th>
                  <th scope='col'> CURP</th>
                  {/* <th scope='col'> Generacion</th> */}
                  {/* <th scope='col'> Estado</th> */}
                </tr>
              </thead>
              <tbody>
              {
                alumnos.map( (data)=> 
                <tr key={"celda"+data.id_alumno}>
                  <td key={"userID"+data.id_alumno}>{data.id_alumno}</td> 
                  <td key={"ID"+data.nombre}>{data.nombre}</td>
                  <td key={"body"+data.apellio_p}>{data.apellido_p} </td>
                  <td key={"body"+data.apellio_m}>{data.apellido_m} </td>
                  <td key={"body"+data.genero}>{data.genero}</td>
                  <td key={"body"+data.curp}>{data.curp}</td>
                  {/* <td key={"body"+data.generacion}>{data.generacion}</td> */}
                  {/* <td key={"body"+data.estado}>{data.estado}</td> */}
                </tr>
                )
              }
              </tbody>
          </table>
        </div>   
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table'>
              <thead>
                <tr>
                  <th colSpan={10} >Profesores</th>
                </tr>
                <tr>
                  <th scope='col'> ID Profesor</th>
                  <th scope='col'> Nombre</th>
                  <th scope='col'> Apellido Paterno</th>
                  <th scope='col'> Apellido Materno</th>
                  <th scope='col'> Genero</th>
                  <th scope='col'> CURP</th>
                  <th scope='col'> Cedula</th>
                  <th scope='col'> Telefono</th>
                  <th scope='col'> Correo</th>
                  {/* <th scope='col'> Estado</th> */}
                </tr>
              </thead>
              <tbody>
              {
                profesores.map( (data)=> 
                <tr key={"celda"+data.id_profesor}>
                  <td key={"userID"+data.id_profesor}>{data.id_profesor}</td> 
                  <td key={"ID"+data.nombre}>{data.nombre}</td>
                  <td key={"body"+data.apellio_p}>{data.apellido_p} </td>
                  <td key={"body"+data.apellio_m}>{data.apellido_m} </td>
                  <td key={"body"+data.genero}>{data.genero}</td>
                  <td key={"body"+data.curp}>{data.curp}</td>
                  <td key={"body"+data.cedula}>{data.cedula}</td>
                  <td key={"body"+data.telefono}>{data.telefono}</td>
                  <td key={"body"+data.correo}>{data.correo}</td>
                  {/* <td key={"body"+data.estado}>{data.estado}</td> */}
                </tr>
                )
              }
              </tbody>
          </table>
        </div>   
      </div>
      
    </div>
  );
}

export default Botones_Mostrar;
