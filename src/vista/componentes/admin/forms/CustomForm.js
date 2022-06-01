import "./forms.css";



export default function CustomForm() {

  
    
    const handleSubmit = (event) => {
    try {
        console.log("jala asd asdasdasdasdasdfedrfggverafeargf");
    } catch(error) {
      console.log(error);
    }
      
    }

    return (
      <div className="container-form">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="form-group">
        
            <input type ="text" name ="nombre" id="nombre" placeholder="Ingrese nombre"/>
            <h4>Alta Alumno</h4>
            <input className="controls" type ="text" name ="nombre" id="nombre" placeholder="Ingrese nombre"/>
            <input className="controls" type ="text" name ="apellidomat" id="apellidopat" placeholder="Ingrese apellido paterno"/>
            <input className="controls" type ="text" name ="apellidomat" id="apellidomat" placeholder="Ingrese apellido materno"/>
            <input className="controls" type ="text" name ="cuenta" id="cuenta" placeholder="Ingrese numero de cuenta"/>
            <input className="controls" type ="text" name ="curp" id="curp" placeholder="Ingrese el CURP"/>
            <h2>Genero</h2>
            <input name="cbilibros" type="checkbox" />
            <input name="cbilibros" type="checkbox" />
            <h2>Fecha de nacimiento</h2>
            <input className ="date" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2022-12-31"/>
            <input className="botons" type ="submit" value ="Registrar" />
        </form>
      </div>
    )
  }