import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <Provider store={store}>
     <App/>
    </Provider>
  </HeroUIProvider>
)

