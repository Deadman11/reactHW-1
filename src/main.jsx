import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import ShopItemFunc from './App.jsx'
import ShopItemClass from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopItemFunc />
    {/* <ShopItemClass /> */}
  </StrictMode>,
)

createRoot(document.getElementById('rootClass')).render(
  <StrictMode>
    <ShopItemClass />
  </StrictMode>,
)
