import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
   setmodal,
   animarModal,
   setAnimarModal,
   guardarGasto,
   gastoEditar,
   setGastoEditar,
}) => {
   const [nombre, setNombre] = useState("");
   const [cantidad, setCantidad] = useState("");
   const [categoria, setCategoria] = useState("");
   const [fecha, setFecha] = useState("");
   const [id, setId] = useState("");

   useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
         setNombre(gastoEditar.nombre);
         setCantidad(gastoEditar.cantidad);
         setCategoria(gastoEditar.categoria);
         setId(gastoEditar.id);
         setFecha(gastoEditar.fecha);
      }
   }, []);

   const ocultarModal = () => {
      setAnimarModal(false);
      setGastoEditar({});
      setTimeout(() => {
         setmodal(false);
      }, 500);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre, cantidad, categoria].includes("")) {
         toast.warn("Llene todos los campos", {
            position: "top-center",
         });
         return;
      }
      guardarGasto({ nombre, cantidad, categoria, id, fecha });
   };

   return (
      <div className='modal'>
         <div className='cerrar-modal' onClick={ocultarModal}>
            <img src={CerrarBtn} alt='boton cerrar' />
         </div>
         <form
            action=''
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            onSubmit={handleSubmit}>
            <legend>
               {gastoEditar.nombre ? "Editar Gasto" : "Nuevo gasto"}
            </legend>
            <div className='campo'>
               <label htmlFor='nombre'>Nombre Gasto</label>
               <input
                  id='nombre'
                  type='text'
                  placeholder='Nombre del gasto'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
            </div>

            <div className='campo'>
               <label htmlFor='cantidad'>Nombre Cantidad</label>
               <input
                  id='cantidad'
                  type='number'
                  placeholder='Cantidad del gasto: ej. 300'
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
               />
            </div>

            <div className='campo'>
               <label htmlFor='categoria'>Categoría</label>
               <select
                  name=''
                  id='categoria'
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}>
                  <option value=''>-- Seleccione --</option>
                  <option value='ahorro'>Ahorro</option>
                  <option value='comida'>Comida</option>
                  <option value='casa'>Casa</option>
                  <option value='gastos'>Gastos Varios</option>
                  <option value='ocio'>Ocio</option>
                  <option value='salud'>Salud</option>
                  <option value='sucripciones'>Suscripciones</option>
               </select>
            </div>

            <input
               type='submit'
               value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir gasto"}
               name=''
               id=''
            />
         </form>
      </div>
   );
};

Modal.propTypes = {};

export default Modal;
