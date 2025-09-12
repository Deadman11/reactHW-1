import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css';

import AppShopItemClass from './App.jsx';
import AppShopItemFunc from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppShopItemClass />,
    <AppShopItemFunc />
  </StrictMode>,
) 
