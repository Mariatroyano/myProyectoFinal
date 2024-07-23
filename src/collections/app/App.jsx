import { HeaderComponent } from "../header/HeaderComponent";
import MainScreen from "../screen/MainScreen";

function App({Logeado = false, setLogeado}) {
  return (
    <>
      {Logeado ? (
        <>
          <div className="HeaderComponent">
            <HeaderComponent />
          </div>
          <div className="componentsCard">
            <MainScreen />
          </div>
        </>
      ) : (
        <h1>Error..No Te Encuentras Logeado </h1>
      )}
    </>
  );
}

export default App;
