import { useState, useEffect } from "react";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarID } from "./helpers";
import "react-toastify/dist/ReactToastify.min.css";
import ListadoGastos from "./components/ListadoGastos";

function App() {
   const [gastos, setGastos] = useState([]);

   const [presupuesto, setPresupuesto] = useState(0);
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

   const [modal, setmodal] = useState(false);
   const [animarModal, setAnimarModal] = useState(false);

   const [gastoEditar, setGastoEditar] = useState({});

   useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
         setmodal(true);

         setTimeout(() => {
            setAnimarModal(true);
         }, 300);
      }
   }, [gastoEditar]);

   const handleNuevoGasto = () => {
      setmodal(true);
      setGastoEditar({});

      setTimeout(() => {
         setAnimarModal(true);
      }, 300);
   };

   const guardarGasto = (gasto) => {
      if (gasto.id) {
         // actualizar
         const gastosActualizados = gastos.map((gastoState) =>
            gastoState.id === gasto.id ? gasto : gastoState
         );
         setGastos(gastosActualizados);
         toast.success("Editado correctamente");
      } else {
         gasto.id = generarID();
         gasto.fecha = Date.now();
         setGastos([...gastos, gasto]);
         toast.success(`Se ha añadido un nuevo gasto`);
      }
      setAnimarModal(false);
      setTimeout(() => {
         setmodal(false);
      }, 300);
   };

   const eliminarGasto = (id) => {
      const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
      setGastos(gastosActualizados);
      toast.success(`Gasto eliminado`);
   };

   return (
      <div className={modal ? "fijar" : ""}>
         <ToastContainer draggablePercent={60} draggableDirection='y' />
         <Header
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />

         {isValidPresupuesto && (
            <>
               <main>
                  <ListadoGastos
                     gastos={gastos}
                     setGastoEditar={setGastoEditar}
                     eliminarGasto={eliminarGasto}
                  />
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
               gastoEditar={gastoEditar}
            />
         )}
      </div>
   );
}

export default App;
