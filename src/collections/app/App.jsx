
import './App.css'
import logo from '../../assets/react.svg'
import { FinalCardComponent } from '../../basics/card/FinalCardComponent'
import { HeaderComponent } from '../../basics/header/HeaderComponent'

function App() {
  return (
    <>
    <HeaderComponent />
      <FinalCardComponent
        nombreProducto={"camisa"}
        icon={
          <img src={logo} />
        }
        precioProducto={
          '$150.000'
        }
        desacripcion={
          'Camisa en poliester, alta costura y cuidado en sus definiciones '
        }
      />
    </>



  )
}

export default App
