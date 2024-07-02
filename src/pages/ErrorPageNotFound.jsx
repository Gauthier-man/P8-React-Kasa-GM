import React from 'react'
import {Link} from "react-router-dom";
import "./ErrorPageNotFound.scss";
import Navbar from '../components/Navbar.jsx';
import Main from '../layout/Main.jsx';
import Footer from '../layout/Footer.jsx';

function ErrorPageNotFound() {
  return (
    <>
     <Navbar/>
     <Main>
        <div className="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
        <Footer/>
     </Main>
    </>
  )
}

export default ErrorPageNotFound
