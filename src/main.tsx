import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importamos el provider desde redux y el store desde la carpeta que lo contiene: 
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Definimos el provider y le pasamos el store: */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

//Ahora la aplicación está lista para usar redux.