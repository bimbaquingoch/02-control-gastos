import { useState } from "react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarID } from "./helpers";
import "react-toastify/dist/ReactToastify.min.css";
import ListadoGastos from "./components/ListadoGastos";

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
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      setAnimarModal(false);
      setTimeout(() => {
         setmodal(false);
      }, 300);
   };

   return (
      <div className={modal ? "fijar" : ""}>
         <ToastContainer draggablePercent={60} draggableDirection='y' />
         <Header
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />

         {isValidPresupuesto && (
            <>
               <main>
                  <ListadoGastos gastos={gastos} />
               </main>
               <div className='nuevo-gasto'>
                  <img
                     src={IconoNuevoGasto}
                     alt='Icono nuevo gasto'
                     onClick={handleNuevoGasto}
                  />
               </div>
            </>
         )}

         {modal && (
            <Modal
               setmodal={setmodal}
               animarModal={animarModal}
               setAnimarModal={setAnimarModal}
               guardarGasto={guardarGasto}
            />
         )}
      </div>
   );
}

export default App;
