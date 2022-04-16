import '../componentes/css-general/style_h_f.css';

export default function Header() {
  return(
    <div>
    
       <header>
        <p><span class="title-header">Escuela Nacional Preparatoria</span></p>
      </header>
      <div class="container-fluid"> 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Escuela</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Profesores <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Alumnos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Materias</a>
                  </li>
              </ul>
            </div>
            <a class="btn btn-outline-primary" href="#">Cerrar sesión</a>
          </nav>
        </div> 
    </div>
  )
}