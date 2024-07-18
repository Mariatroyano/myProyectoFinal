import { HeaderComponent } from "../../basics/header/HeaderComponent";
import MainScreen from "../screen/MainScreen";

function App() {
  return (
    <>
      <div className="HeaderComponent">
        <HeaderComponent />
      </div>
      <div className="componentsCard">
        <MainScreen />
      </div>
    </>
  );
}

export default App;
