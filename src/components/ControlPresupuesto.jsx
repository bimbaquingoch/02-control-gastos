import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { formatearCantidad } from "../helpers";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ gastos, presupuesto }) => {
   const [disponible, setDisponible] = useState(0);
   const [gastado, setGastado] = useState(0);
   const [porcentaje, setPorcentaje] = useState(0);

   useEffect(() => {
      const totalGastado = gastos.reduce(
         (total, gasto) => gasto.cantidad + total,
         0
      );
      const totalDisponible = presupuesto - totalGastado;

      // porcentaje gastado
      const nuevoPorcentaje = (
         ((presupuesto - totalDisponible) / presupuesto) *
         100
      ).toFixed();

      setDisponible(totalDisponible);
      setGastado(totalGastado);

      setTimeout(() => {
         setPorcentaje(nuevoPorcentaje);
      }, 800);
   }, [gastos]);

   return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
         <div>
            <CircularProgressbar
               styles={buildStyles({
                  pathColor: "#3b82f6",
                  trailColor: "#f5f5ff",
                  textColor: "#3b82f6",
               })}
               value={porcentaje}
               text={`${porcentaje}% Gastado`}
            />
         </div>
         <div className='contenido-presupuesto'>
            <p>
               <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
               <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
               <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
         </div>
      </div>
   );
};

ControlPresupuesto.propTypes = {};

export default ControlPresupuesto;
