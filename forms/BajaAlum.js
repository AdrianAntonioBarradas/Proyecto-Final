import './forms-styles.css';
function BajaAlum() {
  return (
    <div className="ModificarAlum">
      <head>
      <title>Baja Alumno </title>
      </head>
      <body>
      <section class="form-register">
            <h4>Baja Alumno</h4>
            <div class="buscar">
            <input type ="text" placeholder="Search" requiered></input>
            <div class ="btn">
            </div>  
          </div>
            <h2>Numero de cuenta</h2>
                <select class= "asig" name="select">
                 <option value="value1">Cuenta 1</option>
                 <option value="value2">Cuenta 2</option>
                 <option value="value3">Cuenta 3</option>
               </select>
            <h2>Nombre del Alumno</h2>
               <select class= "asig" name="select">
                <option value="value1">Alumno  1</option>
                <option value="value2">Alumno  2</option>
                <option value="value3">Alumno  3</option>
              </select>
          
            <h2>Grupo</h2>
                  <select class= "asig" name="select">
                   <option value="value1">Grupo 1</option>
                   <option value="value2">Grupo 2</option>
                   <option value="value3">Grupo 3</option>
                 </select>  
                 <input class="botons" type ="submit" value ="Dar de baja" > </input>           
        </section>
      </body>
    </div>
  );
}
export default BajaAlum;