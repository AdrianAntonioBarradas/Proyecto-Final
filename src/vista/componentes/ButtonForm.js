import { useContext } from "react";
import { Context } from "./Store";

export default function ButtonForm (){
    const [state, setState]=useContext(Context);
    const setView =()=>{
        setState({...state, view: true});
      };
    return(
        <input className="btn btn-primary btn-lg" type="submit" value="Ingresar" onClick={setView}/>
    );
}