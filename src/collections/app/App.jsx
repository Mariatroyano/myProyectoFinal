
import { HeaderComponent } from '../../basics/header/HeaderComponent'
import MainScreen from '../screen/MainScreen'
import './App.css'

function App() {

  return (
    <>
      <div className='headerComponent'>
        <HeaderComponent />
      </div>
      <div className='componentsCard'>
        <MainScreen />
      </div>
    </>
  )
}

export default App

