import PropTypes from "prop-types";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
   presupuesto,
   setPresupuesto,
   isValidPresupuesto,
   setIsValidPresupuesto,
   gastos,
}) => {
   return (
      <div>
         <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
               <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} />
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

Header.propTypes = {};

export default Header;
