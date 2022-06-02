import ButtonForm from "../../ButtonForm";
import "./forms.css";

export default function BajaAlumno() {
  const handleSubmit = (event) => {
    try {
      console.log("jala asd asdasdasdasdasdfedrfggverafeargf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form">
      <h1>Baja Alumno</h1>

      <form
        method="post"
        action="<?=site_url('/guardar')?>"
        encType="multipart/form-data"
      >
        <label>Nombre alumno:</label>
        <br />
        <input id="nombre" name="nombre" type="text" />
        <br />
        <label>Grupo</label>
        <br />
        <select id="grupo" name="grupo">
          <option value="grupo">grupo1</option>
          <option value="grupo">grupo2</option>
        </select>
        <br />
        <label>Materia</label>
        <br />
        <select id="materia" name="materia">
          <option value="materia">materia1</option>
          <option value="materia">materia1</option>
        </select>
        <br />
        <br />
        <ButtonForm />
      </form>
    </div>
  );
}
