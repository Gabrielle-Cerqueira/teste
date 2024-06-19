import React from 'react'
import ReactDOM from 'react-dom/client'
import Topo from './Topo.jsx'
import App from './App.jsx'
import '../src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topo/>
    <App/>
  </React.StrictMode>,
)
