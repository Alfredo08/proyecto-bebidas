
function FormularioBebida( props ){
    return(
        <form onSubmit={ (event) => props.buscarBebida( event )}>
            <label htmlFor="nombreBebida">
                Nombre de la bebida:
            </label>
            <input type="text" id="nombreBebida" />
            <button type="submit">
                Buscar
            </button>
        </form>
    );
}

export default FormularioBebida;