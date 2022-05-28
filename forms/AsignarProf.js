import './forms-styles.css';
function AsignarProf() {
  return (
    <div className="AsignarProf">
      <head>
      <title>Asignar materia</title>
      </head>
      <body>
      <section class="form-register">
      <h4>Asignacion de materia</h4>
            <h2>Materia</h2>
                   <select class= "asig" name="select">
                    <option value="value1">Materia 1</option>
                    <option value="value2" selected>Materia 2</option>
                    <option value="value3">Materia 3</option>
                  </select>
            <h2>Grupo</h2>
                  <select class= "asig" name="select">
                   <option value="value1">Grupo 1</option>
                   <option value="value2">Grupo 2</option>
                   <option value="value3">Grupo 3</option>
                 </select>  
            <h2>Profesor</h2>
                 <select class= "asig" name="select">
                  <option value="value1">Profesor 1</option>
                  <option value="value2">Profesor 2</option>
                  <option value="value3">Profesor 3</option>
                </select>
            <h2>Numero de cuenta</h2>
                <select class= "asig" name="select">
                 <option value="value1">Cuenta 1</option>
                 <option value="value2">Cuenta 2</option>
                 <option value="value3">Cuenta 3</option>
               </select>
                 <input class="botons" type ="submit" value ="Asignar" > </input>           
        </section>
      </body>
    </div>
  );
}
export default AsignarProf;