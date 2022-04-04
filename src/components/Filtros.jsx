import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Filtros = ({ filtro, setFiltro }) => {
   return (
      <div className='filtros sombra contenedor'>
         <form action=''>
            <div className='campo'>
               <label htmlFor=''>Filtrar gastos</label>
               <select
                  name=''
                  id=''
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}>
                  <option value=''>-- Todos los gastos --</option>
                  <option value='ahorro'>Ahorro</option>
                  <option value='comida'>Comida</option>
                  <option value='casa'>Casa</option>
                  <option value='gastos'>Gastos Varios</option>
                  <option value='ocio'>Ocio</option>
                  <option value='salud'>Salud</option>
                  <option value='sucripciones'>Suscripciones</option>
               </select>
            </div>
         </form>
      </div>
   );
};

Filtros.propTypes = {};

export default Filtros;
