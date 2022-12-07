import React from 'react'

export  function RegistroOrden() {
    return (
        <div>
            <main>
            <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Registro orden</h3></div>
                                        <div className="card-body">
                                            <form>

                                                <div className='row'>
                                                    <div className="col-md-6">
                                                        <label for="Fecha">Fecha</label>
                                                        <input className="form-control" id="inputDate" type="time" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label for="Fecha">Hora</label>
                                                        <input className="form-control" id="inputDate" type="time" />
                                                    </div>
                                                </div>
                                                
                                                <div className='row'>
                                                    <div className="col-md-3">
                                                        <br />
                                                        <input className="form-control" id="inputLargo" placeholder='Largo' type="number" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <br />
                                                        <input className="form-control" id="inputAncho" placeholder='Ancho' type="number" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <br />
                                                        <input className="form-control" id="inputAlto" placeholder='Alto' type="number" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <br />
                                                        <input className="form-control" id="inputPeso" placeholder='Peso' type="number" />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputDireccionRecogida" placeholder='Dirección recogida' type="text" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputCiudadRecogida" placeholder='Ciudad Recogida' type="text" />
                                                    </div>
                                                </div>
                                                
                                                <div className='row'>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputNombreDestinatario" placeholder='Nombre Destinatario' type="text" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputDiDestinatario" placeholder='Cédula/Nit destinatario' type="text" />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputDireccionEntrega" placeholder='Dirección de Entrega' type="text" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <br />
                                                        <input className="form-control" id="inputCiudadEntrega" placeholder='Ciudad de Entrega' type="text" />
                                                    </div>
                                                </div>
                                                <br />

                                                <div className="d-grid gap-2" >
                                                    <input className="btn btn-primary" id="CrearOrden" type="submit" value="Crear Orden" />
                                                </div>
                                            
                                            </form>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            </main>
        </div>
      )
    }