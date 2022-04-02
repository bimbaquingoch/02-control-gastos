import { useState } from "react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
   const [presupuesto, setPresupuesto] = useState(0);
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

   const [modal, setmodal] = useState(false);
   const [animarModal, setAnimarModal] = useState(false);
   const [gastos, setGastos] = useState([]);

   const handleNuevoGasto = () => {
      setmodal(true);
      setTimeout(() => {
         setAnimarModal(true);
      }, 300);
   };

   const guardarGasto = (gasto) => {
      setGastos([...gastos, gasto]);
   };

   return (
      <>
         <ToastContainer draggablePercent={60} draggableDirection='y' />
         <Header
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />

         {isValidPresupuesto && (
            <div className='nuevo-gasto'>
               <img
                  src={IconoNuevoGasto}
                  alt='Icono nuevo gasto'
                  onClick={handleNuevoGasto}
               />
            </div>
         )}

         {modal && (
            <Modal
               setmodal={setmodal}
               animarModal={animarModal}
               setAnimarModal={setAnimarModal}
               guardarGasto={guardarGasto}
            />
         )}
      </>
   );
}

export default App;
