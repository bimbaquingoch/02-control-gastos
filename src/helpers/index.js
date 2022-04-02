export const generarID = () =>
{
    const numeroRandom = Math.random().toString( 36 ).substr( 2 );
    const fecha = Date.now().toString( 36 );
    return numeroRandom + fecha;
};

export const formatearFecha = ( fecha ) =>
{
    const fechaNueva = new Date( fecha );
    const formato = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return fechaNueva.toLocaleDateString( 'es-ES', formato );
};

export const formatearCantidad = ( cantidad ) =>
{
    return cantidad.toLocaleString( "en-US", {
        style: "currency",
        currency: "USD",
    } );
};