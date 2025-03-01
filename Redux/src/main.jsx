
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import"./Store.jsx"
import { Provider } from "react-redux"
import { store } from './Store.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={ store}>
    <App />
  </Provider>
)
