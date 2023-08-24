//App es el padre de todos los componentes
//App tiene como hijo a ItemListContainer que le pasa una greeting (un texto de saludo)
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"New season is coming"} /> 
    </>
  )
}

export default App
