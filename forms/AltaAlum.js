import './forms-styles.css';
function AltaAlum() {
  return (
    <div className="AltaAlum">
      <head>
      <title>Alta alumno</title>
      </head>
      <body>
          <section class="form-register">
            <h4>Alta Alumno</h4>
            <input class="controls" type ="text" name ="nombre" id="nombre" placeholder="Ingrese nombre"></input>
            <input class="controls" type ="text" name ="apellidomat" id="apellidopat" placeholder="Ingrese apellido paterno"></input>
            <input class="controls" type ="text" name ="apellidomat" id="apellidomat" placeholder="Ingrese apellido materno"></input>
            <input class="controls" type ="text" name ="cuenta" id="cuenta" placeholder="Ingrese numero de cuenta"></input>
            <input class="controls" type ="text" name ="curp" id="curp" placeholder="Ingrese el CURP"></input>
            <h2>Genero</h2>
            <input name="cbilibros" type="checkbox" > Hombre </input>
            <input name="cbilibros" type="checkbox" > Mujer </input>
            <h2>Fecha de nacimiento</h2>
            <input class ="date" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2022-12-31"></input>
            <input class="botons" type ="submit" value ="Registrar" ></input>
          </section>
      </body>
    </div>
  );
}
export default AltaAlum;