import "./HeaderComponent.css";
import imgen from "../../../public/logo.jpg";

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
      <img src={""} alt="" className="" />

      <img className="header__logo" src={imgen} alt="p" />
      <h1 className="titulo">Eleganza </h1>
    </nav>
  );
};
