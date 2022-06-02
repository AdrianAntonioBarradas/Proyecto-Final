import ButtonForm from "../../ButtonForm";
import "./forms.css";

export default function AltaAlum() {
  const handleSubmit = (event) => {
    try {
      console.log("jala asd asdasdasdasdasdfedrfggverafeargf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form">
      <h1>Alta alumno</h1>

      <form
        method="post"
        action="<?=site_url('/guardar')?>"
        encType="multipart/form-data"
      >
        <label>Nombre:</label>
        <br />
        <input id="nombre" name="nombre" type="text" />
        <br />
        <label>Apellido Paterno:</label>
        <br />
        <input id="apellido_p" name="apellido_p" type="text" />
        <br />
        <label>Apellido Materno:</label>
        <br />
        <input id="apellido_m" name="apellido_m" type="text" />
        <br />
        <label>Curp:</label>
        <br />
        <input id="curp" name="curp" type="text" />
        <br />
        <label>Fecha Nacimiento:</label>
        <br />
        <input id="fecha_nac" name="fecha_nac" type="date" />
        <br />
        <label>Genero:</label>
        <br />
        <select id="genero" name="genero">
          <option value="MASCULINO">MASCULINO</option>
          <option value="FEMENINO ">FEMENINO</option>
        </select>
        <br />
        <label>Fecha Actualización:</label>
        <br />
        <input
          id="fecha_actualizacion"
          name="fecha_actualizacion"
          type="date"
        />
        <br />
        <label>Estado:</label>
        <br />
        <input id="estado" name="estado" type="text" />
        <br />
        <br />
        <ButtonForm />
      </form>
    </div>
  );
}
