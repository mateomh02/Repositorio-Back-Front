import React from 'react'
import {ListadoOrdenes} from './ListadoOrdenes'
import { RegistroOrden } from './RegistroOrden';
import { ActualizacionOrden } from './ActualizacionOrden';
import { NavBar } from './NavBar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'


export function SideNav() {
    const user = false;
    const ruta = "/"
    

    const listar = () =>{ 
        const rutacom = ruta+"listado"
        window.location.replace(rutacom);
    }

    const crear = () =>{
        const rutacom = ruta+"creacion"
        window.location.replace(rutacom);
    }

    const actualizar = () =>{
        const rutacom = ruta+"actualizar"
        window.location.replace(rutacom);
    }

  return (
    <>
        <NavBar/>
         <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Usuario</div>
                            <a className="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon" ><i className="fas fa-columns" ></i></div>
                                <button onClick={listar}>Listado de Ordenes</button>
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            
                            <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                <button onClick={crear}>Crear Orden</button>
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <a className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                <button onClick={actualizar}>Actualización de Ordenes</button>
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Elaborado por:</div>
                        NCR 2254 Equipo 9
                        <br/>
                        -The best Team-
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">

            <BrowserRouter>
                <Routes>
                    <Route exact path="/listado" element= {<ListadoOrdenes/>} />
                    <Route path="/creacion" element= {<RegistroOrden />}/>
                    <Route path="/actualizar" element= {<ActualizacionOrden />}/>
                </Routes>
            </BrowserRouter>

               <br />
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Derechos Reservados Grupo 9 UniNorte</div>
                            <div>
                                <a href="#">Política de Privacidad</a>
                                <a href="#">Términos & Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}
