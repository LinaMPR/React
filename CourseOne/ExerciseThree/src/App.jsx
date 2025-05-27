import Counter from "./Components/Counter"
import ToogleButton from "./Components/ToggleButton"
import NameForm from "./Components/NameForm"
import CounterWithEffect from "./Components/CounterWithEffect"
import './App.css'

function App() {

  return (
    <div>
      <ToogleButton/>
      <Counter/>
      <h1>Formulario de Nombre</h1>
      <NameForm/>
      <CounterWithEffect/>
    </div>
  )
}

export default App
