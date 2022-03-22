import './Bebida.css';

function Bebida( props ){

    const ingredientes = [];
    let cont = 1;

    while( props.bebida['strIngredient' + cont] ){
        ingredientes.push( <li> {props.bebida['strIngredient' + cont]} {props.bebida['strMeasure' + cont]}</li> );
        cont ++;
    }

    return(
        <div class="bebida">
            <h2 className="bebidaTitulo">
                {props.bebida.strDrink}
            </h2>
            <div className='bebidaContenedor'>
                <img className="bebidaImagen" src={props.bebida.strDrinkThumb} alt={props.bebida.strDrink} />
                <ul>
                    {ingredientes}
                </ul>
            </div>
            <p className="bebidaInstrucciones">
                {props.bebida.strInstructions}
            </p>
        </div>
    );
}

export default Bebida;