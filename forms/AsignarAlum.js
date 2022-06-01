import './forms-styles.css';
function AsignarAlum() {
  return (
    <div className="AsignarAlum">
      <head>
      <title>Asignar grupo</title>
      </head>
      <body>
      <section class="form-register">
            <h4>Asignacion de grupo</h4>
            <h2>Grupo</h2>
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
                 <input class="botons" type ="submit" value ="Asignar" > </input>               
        </section>
      </body>
    </div>
  );
}
export default AsignarAlum;