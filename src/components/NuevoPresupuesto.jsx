import PropTypes from "prop-types";
import { toast } from "react-toastify";

const NuevoPresupuesto = ({
   presupuesto,
   setPresupuesto,
   setIsValidPresupuesto,
}) => {
   const handelPresupuesto = (e) => {
      e.preventDefault();

      if (!presupuesto || presupuesto < 0) {
         toast.error("no es un presupuesto valido");
         setPresupuesto("");
         return;
      }
      setIsValidPresupuesto(true);
   };

   return (
      <div className='contenedor-presupuesto contenedor sombra'>
         <form onSubmit={handelPresupuesto} action='' className='formulario'>
            <div className='campo'>
               <label htmlFor=''>Definir presupuesto</label>
               <input
                  className='nuevo-presupuesto'
                  type='Number'
                  placeholder='añade tu presupuesto'
                  value={presupuesto}
                  onChange={(e) => setPresupuesto(Number(e.target.value))}
               />
               <input type='submit' value='Añadir' />
            </div>
         </form>
      </div>
   );
};

NuevoPresupuesto.propTypes = {};

export default NuevoPresupuesto;
