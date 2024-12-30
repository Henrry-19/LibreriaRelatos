import React from 'react'
import { NavLink } from 'react-router-dom'

const CabeceraNav = () => {
    return (
        <>
        {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Librería: "Relatos de Papel"</h1>
                
            </header>
        {/*Barra de navegación*/}
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Ventana</NavLink></li>
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to="/libros">Libros</NavLink></li>
                    <li><NavLink to="/contactos">Contacto</NavLink></li>
                </ul>
            </nav>

        </>

    )


}

export default CabeceraNav
