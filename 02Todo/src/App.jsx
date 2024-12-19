
import './App.css'
// import { DarkLight } from './DarkLight'
import { ThemeProvider } from './Store/StoreContext'
import { Todo } from './Todo/Todo'

function App() {
  

  return (
    <>
    <ThemeProvider>
      <Todo/>
      {/* <DarkLight /> */}
    </ThemeProvider>
    </>
  )
}

export default App
