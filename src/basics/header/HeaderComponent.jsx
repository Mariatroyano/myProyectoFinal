import './HeaderComponent.css';

export const HeaderComponent = ({ notifications, username, onLogOut, onSeeDetail, ...props }) => {


  return (
    <nav className=" headerNav">
      <img src={''} alt="" className="" />

      <section className="">
        <span className="">{username}</span>

        <button
          type="button"
          className=""
          onClick={()=>{}}
        >
          <img src={''} alt="icon" />
        </button>
        <button
          type="tertiary"
          className=""
          onClick={onLogOut}
        >
          Cerrar sesión
        </button>

        <button
          type="button"
          className=""
          onClick={()=>{}}
        >
          <img src={''} alt="" />
        </button>
      </section>
    </nav>
  );
}


