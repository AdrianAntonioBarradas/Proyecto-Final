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
  const [id, setName] = useState("administra");
  const [pass, setPass] = useState("123");
  const [role, setRole] = useState(null);

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
    for (const x in json) {
      // if(json[x]['id_usuario']==id && json[x]['s.password']== pass)
      console.log(json[x]['id_rol']);
      console.log(json[x]['id_usuario']);
      console.log(json[x]['password']);
      if(json[x]['id_usuario']== id && json[x]['password'] == pass){
        console.log(json[x]['id_rol']);
        setRole(json[x]['id_rol']);
        console.log(role);
      }
    }



  
    // json.map((s) => {
    //   // console.log(s.id_usuario+"  "+s.password+"  "+s.id_rol);
    //   console.log(s.id_rol);
      
    //   if(s.id_usuario==id && s.password== pass){
    //     // console.log(s.id_rol) ;
    //     setRole(5);
    //     console.log("role"+role+"el de json: "+s.id_rol);
    //     setCent(true);
    //     console.log(cent);
    //     }
    // });
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

    const handleSubmit =  (event) => {
    event.preventDefault();
    try {
      
        
      setRole(aprove);
      if(json!==null && role!==null){
        
        
        console.log(json);
        // name== ? 
        if (pass !=="" && id!=="" ){
          // await getConsulta();
          
          console.log(role);
          
            setState({ id: id, role: role });
            // alert(`The id you entered was: ${id} sith la contra: ${pass}`);
      
        
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