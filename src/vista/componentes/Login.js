import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import   "../login/script.js"
import "./login.css"


export default function Login() {
    // const navigate = useNavigate();
    const [id, setName] = useState("");
    const [pass, setPass] = useState("");
  
    const handleSubmit = (event) => {
    try {
        event.preventDefault();
        // name== ? 
        var inputAccount = document.getElementById("account");
        var inputPass = document.getElementById("password");
        if (id == "") { 
          inputAccount.classList.remove("correct-input");
          inputAccount.classList.add("error-input");
        } else {
          inputAccount.classList.add("correct-input");
          inputAccount.classList.remove("error-input");
        }

        if (pass == "") { 
          inputPass.classList.remove("correct-input");
          inputPass.classList.add("error-input");
        } else {
          inputPass.classList.add("correct-input");
          inputPass.classList.remove("error-input");
        }

        if (pass !="" && id!="" ){
          console.log(inputAccount);
          // alert(`The id you entered was: ${id} sith la contra: ${pass}`);
          // navigate("/admin");
        }
        
    } catch(error) {
      console.log(error);
    }
      
    }

    const userId=id;
    

    return (
      <div className="container">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="form-group">
          <div class="form-check"> 
            <label>Número de cuenta:</label>
              <input className="form-control" id="account" type="number"  value={id} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div class="form-check"> 
          <label>Contraseña:</label>
            <input className="form-control" id="password" type="password"   value={pass}  onChange={(e) => setPass(e.target.value)} />
          </div>
          <div className="center">
          {/* aquí la parte prueba de los control btn */}
        
        <div class="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" for="inputGroupSelect01">Rol:</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                      <option selected >...</option>
                      <option value={3}>Alumno</option>
                      <option value={2}>Profesor</option>
                      <option value={1}>Admin</option>
                    </select>
                  </div>
        
          
          






          {/* fin prueba de controls */}
            <input className="btn btn-primary " type="submit" value="Ingresar"/>
          </div>
        </form>
      </div>
    )
  }