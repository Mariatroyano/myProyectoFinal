import './FinalCardComponent.css'
export const FinalCardComponent = ({nombreProducto,precio, desacripcion, icon}) =>{


    return(
        <div className="component">
            <div className='title'>
                {nombreProducto}
            </div>
            <br/>
            <div>
                <img src={icon} alt='hola' className='icon'/>
            </div>
            <br/>
            <hr/>
            <div className='title'>
                {desacripcion}
            </div>
            <div className='title'>
                {precio}
            </div>
        </div>
    )
}