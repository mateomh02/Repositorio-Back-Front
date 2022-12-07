import React from 'react'

export function Registro() {
  return (
    <>
        <body className="bg-dark">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Registro de Usuario</h3></div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="text" placeholder="Nombre" />
                                                        <label for="inputEmail">Nombre</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="text" placeholder="Usuario" />
                                                        <label for="inputEmail">Usuario</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="password" placeholder="Contraseña" />
                                                        <label for="inputEmail">Contraseña</label>
                                                    </div>                                                                                        
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputPassword" type="email" placeholder="Email" />
                                                        <label for="inputPassword">Email</label>
                                                    </div>
                                                    <div className="d-grid gap-2" >
                                                        <input className="btn btn-primary" id="inputPassword" type="submit" value="Registrarse" />
                                                    </div>
                                        
                                                </form>
                                        
                                            </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                         <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Derechos Reservados &copy; Equipo 9 NRC 2136</div>
                            <div>
                                <a href="#">Política de Privacidad</a>
                                <a href="#">Términos & Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
    </body>
    
    </>
  )
}
