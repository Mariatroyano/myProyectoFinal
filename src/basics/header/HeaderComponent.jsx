<<<<<<< HEAD
import './HeaderComponent.css';
import Formulario from '../../collections/app/Formulario'
import imgen from '../../../public/logo.jpg'
=======
import "./HeaderComponent.css";
import Formulario from "../../collections/app/Formulario";
import imgen from "C:/Users/Maria Troyano/Desktop/Proyecto-Final/proyecto-final/public/logo.jpg";
>>>>>>> 8523f7a20743e47d66964907a60dbce46d48991f

export const HeaderComponent = ({
  notifications,
  username,
  onLogOut,
  onSeeDetail,
  LoGo,
  img,
  ...props
}) => {
  return (
    <nav className=" headerNav">
<<<<<<< HEAD
      <img src={''} alt="" className="" />

      <img className="header__logo" src={imgen} alt="" /> 
       <h1 className='titulo'>Eleganza </h1>
      <Formulario/>
=======
      <img src={""} alt="" className="" />
>>>>>>> 8523f7a20743e47d66964907a60dbce46d48991f

      <img className="header__logo" src={imgen} alt="p" />
      <h1 className="titulo">Eleganza </h1>
      <Formulario />
    </nav>
  );
};
