import { useState, useEffect } from "react";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarID } from "./helpers";
import "react-toastify/dist/ReactToastify.min.css";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

function App() {
   const [gastos, setGastos] = useState(
      localStorage.getItem("gastos")
         ? JSON.parse(localStorage.getItem("gastos"))
         : []
   );

   const [presupuesto, setPresupuesto] = useState(
      Number(localStorage.getItem("presupuesto")) ?? 0
   );
   const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

   const [modal, setmodal] = useState(false);
   const [animarModal, setAnimarModal] = useState(false);

   const [gastoEditar, setGastoEditar] = useState({});

   const [filtro, setFiltro] = useState("");
   const [gastosFiltrados, setGastosFiltrados] = useState([]);

   useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
         setmodal(true);

         setTimeout(() => {
            setAnimarModal(true);
         }, 300);
      }
   }, [gastoEditar]);

   useEffect(() => {
      if (filtro) {
         // filtrar gastos x categoria
         const gastoFiltrado = gastos.filter(
            (gasto) => gasto.categoria === filtro
         );

         setGastosFiltrados(gastoFiltrado);
      }
   }, [filtro]);

   // guardar presupuesto en localStorage
   useEffect(() => {
      localStorage.setItem("presupuesto", presupuesto ?? 0);
   }, [presupuesto]);

   useEffect(() => {
      const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;

      if (presupuestoLS > 0) {
         setIsValidPresupuesto(true);
      }
   }, []);

   // guardar gastos en localStorage
   useEffect(() => {
      localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
   }, [gastos]);

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
         setGastoEditar({});
      } else {
         gasto.id = generarID();
         gasto.fecha = Date.now();
         setGastos([gasto, ...gastos]);
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
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
         />

         {isValidPresupuesto && (
            <>
               <main>
                  <Filtros filtro={filtro} setFiltro={setFiltro} />
                  <ListadoGastos
                     gastos={gastos}
                     setGastoEditar={setGastoEditar}
                     eliminarGasto={eliminarGasto}
                     filtro={filtro}
                     gastosFiltrados={gastosFiltrados}
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
               setGastoEditar={setGastoEditar}
            />
         )}
      </div>
   );
}

export default App;
