import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/index.jsx'
import Footer from './Components/Footer/index.jsx'
import DisplayCertificate from './Components/DisplayCertificate/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <DisplayCertificate/>
    <Footer/>
  </React.StrictMode>,
)
