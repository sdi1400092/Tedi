import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import Reservations from './pages/Reservations.tsx'
// import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Reservations />
  </React.StrictMode>
)
