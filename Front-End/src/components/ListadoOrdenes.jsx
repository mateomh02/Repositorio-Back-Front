import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function ListadoOrdenes() {
    const [ordenes, setOrdenes] = useState(null)
    
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch ('http://localhost:3009/api/orders');
            const data = await response.json();
            console.log(data)
        }fetchData()
    })
    
  return (
    <>
         <main>

                    <div className="container-fluid px-4">
                        <h1 className="mt-4">DashBoard Recogida de Paquetes</h1>
                        <br />
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                Gestion de Paquetes - Listado de Ordenes
                            </div>
                            <div className="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th># Servicio</th>
                                            <th>Fecha</th>
                                            <th>Ciudad Entrega</th>
                                            <th>Direccion Entrega</th>
                                            <th>Estado Entrega</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                                    <tr>
                                                        <th># Servicio</th>
                                                        <th>Fecha</th>
                                                        <th>Ciudad Entrega</th>
                                                        <th>Direccion Entrega</th>
                                                        <th>Estado Entrega</th>
                                                    </tr>
                                                </thead>
                                        
                                        {ordenes !== null ? ordenes.map((iterador, index)=>{
                                            return (
                                                <thead>
                                                    <tr>
                                                    <td>{ordenes.nombreDestinatario}</td>
                                                    <td>{ordenes.largo}</td>
                                                    <td>{ordenes.ancho}</td>
                                                    <td>{ordenes.alto}</td>
                                                    <td>{ordenes.peso}</td>
                                                    <td>{ordenes.dirRecogida}</td>
                                                    <td>{ordenes.ciuRecogida}</td>
                                                    <td>{ordenes.cedula}</td>
                                                    <td>{ordenes.dirEntrega}</td>
                                                    <td>{ordenes.ciuEntrega}</td>
                                                     </tr>
                                                </thead>
                                            )
                                        }):''}
                                    <tbody>
                                        <tr>
                                            <td>123456</td>
                                            <td><input type="date" /></td>
                                            <td>Bogota</td>
                                            <td>Calle 48 # 34-65</td>
                                            <td>Guardado</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
    </>
  )
}
