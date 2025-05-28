import Button from "./Components/Button"
import Counter from "./Components/Counter"
import CounterWithUseReducer from "./Components/CounterWithUseReducer"
import './App.css'

function greet(name: string) : string {
  return `Hola ${name}`
}

function App() {
  const hondleClick = () => alert("Ya estoy cliqueado!");

  console.log(greet("Lina"))
  
  return (  
    <>
     <Button onclick={hondleClick} label="Click me" /> 
     <Counter />
     <CounterWithUseReducer />
    </>
  )
}

export default App
