import { useState } from "react";
import   "../login/script.js"
import "./login.css"


export default function Login() {
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
    try {
        event.preventDefault();
        // name== ? 
        alert(`The name you entered was: ${name}`);
    } catch (error) {
        
    }
      
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Número de cuenta:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
  }