import { useContext, createContext, useState } from "react"
import Counter from "./Components/Counter/Counter"
import CounterWithCustomHook from "./Components/CounterWithCustomHook/CounterWithCustomHook"
import CounterWithReactMemo from "./Components/CounterWithReactMemo/CounterWithReactMemo"
import './App.css'

const ThemeContext = createContext();

function ThemeProvider({ children }){
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

function ThemeButtom(){
  const { theme, toggleTheme } = useContext(ThemeContext);

  return(
    <button 
      onClick={toggleTheme}
      style={
        {
          backgroundColor: theme === "light" ? "#FFF" : "#333",
          color: theme === "light" ? "#000" : "#FFF",
        }
      }
    >
      Cambiar tema
    </button>
  )
}

function App() {

  return (
    <>
      <Counter/>
      <ThemeProvider>
        <ThemeButtom/>
      </ThemeProvider>
      <Counter/>
      <CounterWithReactMemo/>
    </>
  )
}

export default App
