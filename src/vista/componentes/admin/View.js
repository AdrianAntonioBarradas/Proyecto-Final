import { useState } from "react";

export default function View() {
  const [val, setVal] = useState(1);
  val ? setVal(0) : setVal(1);
  return val;
}
