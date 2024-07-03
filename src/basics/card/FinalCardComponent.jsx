import './FinalCardComponent.css'
export const FinalCardComponent = ({nombreProducto, precioProducto,desacripcion, icon}) =>{


    return(
        <div className="component">
            <div className='title'>
                {nombreProducto}
            </div>
            <br/>
            <hr/>
            <div>
                {icon}
            </div>
            <div className='title'>
                {precioProducto}
            </div>
            <br/>
            <div className='title'>
                {desacripcion}
            </div>
        </div>
    )
}