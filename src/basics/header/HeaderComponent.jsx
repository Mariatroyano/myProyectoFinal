import './HeaderComponent.css';
import Formulario from '../../collections/app/Formulario'
import imgen from 'C:/Users/Maria Troyano/Desktop/Proyecto-Final/proyecto-final/public/logo.jpg'

export const HeaderComponent = ({ notifications, username, onLogOut, onSeeDetail, LoGo,img,...props }) => {
  return (
    <nav className=" headerNav">
      <img src={''} alt="" className="" />

      <img className="header__logo" src={imgen} alt="p" /> 
       <h1 className='titulo'>Eleganza </h1>
      <Formulario/>

    </nav>
  );
}





