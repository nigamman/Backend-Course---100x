import React from "react";

//import KeyReact from "./topics/KeyReact";
import ReactReturn from "./topics/ReactReturn";
import WrapperComponents from "./topics/WrapperComponents";
import UseEffect from "./topics/UseEffect";
import UseEffect2 from "./topics/UseEffect2";
import UseCallback from "./topics/UseCallback";
import UseMemo from "./topics/UseMemo";
import UseRef from "./topics/UseRef";
import Ass1UseMemo from "./assignment/Ass1UseMemo";
import Ass2UseMemo from "./assignment/Ass2UseMemo";
import Ass3UseMemo from "./assignment/Ass3UseMemo";
import Ass4UseCallback from "./assignment/Ass4UseCallback";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* ⬇️ Change this component name based on the import above */}
      <Ass4UseCallback />
    </div>
  );
}

export default App;