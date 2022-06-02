import { useContext, useEffect, useState } from "react";
import   "../login/script.js"
import "./login.css"
import { Context } from "./Store.js";
// con axos
import axios from "axios";



export default function Login() {
  const [json, setJson] = useState(null);
  const [state, setState]=useContext(Context);
    // const navigate = useNavigate();
    const [id, setName] = useState("");
    const [pass, setPass] = useState("");
    const [role, setRole] = useState("");

    const [cent, setCent]=useState();

    useEffect(() => {
      var inputAccount = document.getElementById("account");
      var inputPass = document.getElementById("password");
      // var inputrole= document.getElementById("roleinput");
      if (id === "") { 
        inputAccount.classList.remove("correct-input");
        inputAccount.classList.add("error-input");
      } else {
        inputAccount.classList.add("correct-input");
        inputAccount.classList.remove("error-input");
      }

      if (pass === "") { 
        inputPass.classList.remove("correct-input");
        inputPass.classList.add("error-input");
      } else {
        inputPass.classList.add("correct-input");
        inputPass.classList.remove("error-input");
      }

      if(json ===null)
      {
        getConsulta();
      }
      
    }, [id, pass]);

    const aprove =()=>{
  
      json.map((s) => {
        console.log(s.id_usuario);
        if(s.id_usuario===id && s.password=== pass){
          setRole(s.id_rol);
          setCent(true);
          console.log("sí paso");
          
        }
      });
      };
    
    const getConsulta = async () => {
      try {
        // let formData = new FormData();
        const url = "http://localhost:5000/getusuarios";
        let result = await axios({
          url,
          method: "GET",
          dataType: "json",
          ContentType: "application/json",
          // data: formData
        });
        console.log(result.data);
        setJson(result.data);
        
        // return result.data;
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmit = async (event) => {
    try {
      if(json!==null){
        event.preventDefault();
        aprove();
        console.log(json);
        // name== ? 
        if (pass !=="" && id!=="" ){
          // await getConsulta();
          
          console.log("esta rolenado  "+role);
          if(cent){
            console.log(pass+" sdfsdf  "+id);
            setState({ id: id, role: role });
            // alert(`The id you entered was: ${id} sith la contra: ${pass}`);
          // navigate("/admin");
      }
        
          }
          
        }
        
    } catch(error) {
      console.log(error);
    }
      
  };

   

    

    

    return (
      <div className="container">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="form-check"> 
            <label>Nombre de cuenta:</label>
              <input className="form-control" id="account" type="text"  value={id} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-check"> 
          <label>Contraseña:</label>
            <input className="form-control" id="password" type="password"   value={pass}  onChange={(e) => setPass(e.target.value)} />
          </div>
          <div className="center">
          {/* aquí la parte prueba de los control btn */}
        
          <div className="input-group mb-3">
            {/* <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Rol:</label>
            </div> */}
            {/* <select className="custom-select" id="roleinput" value={role} onChange={(e) => setRole(e.target.value)}>
              <option  >...</option>
              <option value={3}>Alumno</option>
              <option value={2}>Profesor</option>
              <option value={1}>Admin</option>
            </select> */}
          </div>
            <input className="btn btn-primary btn-lg" type="submit" value="Ingresar"/>
          </div>
        </form>
      </div>
    )
  }