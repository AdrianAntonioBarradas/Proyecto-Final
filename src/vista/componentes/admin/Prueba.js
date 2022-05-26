// https://www.youtube.com/watch?v=tnt2y7D3V9o
// https://www.youtube.com/watch?v=tnt2y7D3V9o&ab_channel=Weibenfalk
import React, { useContext } from "react";
import { Context } from "../Store";

const Prueba = () => {
  const [state, setState] = useContext(Context);

  const handleClick = async () => {
    try {
      // const person = await (
      //   await fetch(
      //     "https://random-data-api.com/api/id_number/random_id_number"
      //   )
      // ).json();
      // console.log(person);
      // state.view ? setState(false) : setState(true);
      // setState(state + 1);
      console.log(state);
      // setState(person);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Fancy U!</h2>
      <p> state: {state.id} </p>
      {/* <p> name: {state.uid} </p>
      <p> name: {Context.uid} </p> */}
      <button onClick={handleClick}>Click me </button>
    </>
  );
};

export default Prueba;
