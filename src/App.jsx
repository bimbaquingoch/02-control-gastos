import { useState } from "react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
   const [presupuesto, setPresupuesto] = useState(0);
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

   return (
      <>
         <ToastContainer draggablePercent={60} draggableDirection='y' />
         <Header
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />
      </>
   );
}

export default App;
