import PropTypes from "prop-types";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
   presupuesto,
   setPresupuesto,
   isValidPresupuesto,
   setIsValidPresupuesto,
   gastos,
   setGastos,
}) => {
   return (
      <div>
         <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
               <ControlPresupuesto
                  gastos={gastos}
                  setGastos={setGastos}
                  presupuesto={presupuesto}
                  setPresupuesto={setPresupuesto}
                  setIsValidPresupuesto={setIsValidPresupuesto}
               />
            ) : (
               <NuevoPresupuesto
                  presupuesto={presupuesto}
                  setPresupuesto={setPresupuesto}
                  setIsValidPresupuesto={setIsValidPresupuesto}
               />
            )}
         </header>
      </div>
   );
};

Header.propTypes = {
   presupuesto: PropTypes.number.isRequired,
   setPresupuesto: PropTypes.func.isRequired,
   isValidPresupuesto: PropTypes.bool.isRequired,
   setIsValidPresupuesto: PropTypes.func.isRequired,
   gastos: PropTypes.array.isRequired,
   setGastos: PropTypes.func.isRequired,
};

export default Header;
