import React from 'react'
//import {Routes, Route, BrowserRouter} from 'reaact-router-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from '../componentes/Contacto'
import Libro from '../componentes/Libro'
import Inicio from '../componentes/Inicio'
import Error from '../componentes/Error'
import CabeceraNav from '../componentes/layout/CabeceraNav'
import PiePagina from '../componentes/layout/PiePagina'
const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <div className="layout">
                {/*Header y Navegación */}
                <CabeceraNav />
                <section className="content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/libros" element={<Libro />} />
                        <Route path="/contactos" element={<Contacto />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </section>
                {/*Buscador*/}
                <aside>
                </aside>
                {/*Pie de página */}
                <PiePagina />
            </div>
        </BrowserRouter>


    )
}

export default RouterPrincipal
