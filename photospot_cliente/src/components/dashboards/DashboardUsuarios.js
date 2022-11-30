import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


function DashboardUsuarios() {
    
    const [lgShow, setLgShow] = useState(false);
    const [AgregarShow, setAgregar] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apepat, setApepat] = useState("");
    const [apemat, setApemat] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUser] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [rolId, setRolId] = useState("");
    const [usuarios, setUsuario] = React.useState([]);
    const [EditUsuario, setEditUsuario] = React.useState([]);

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/usuario/listar');
        const users = await data.json();
        setUsuario(users);
    }
    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const Eliminar = event => {

        const id_eliminar = event.currentTarget.id;
        Swal.fire({
            title: '¿Estas seguro que quieres eliminar este usuario?',

            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: true

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {
            try {
                let res = await fetch('http://localhost:9595/administrador/usuario/' + id_eliminar, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    }),
                });
                if (res.status === 200) {
                    window.location.reload()
                    window.scrollTo(0, document.body.scrollHeight);
                    console.log("El usuario fue eliminado con exito")
                } else {
                    console.log("Error al eliminar el usuario");
                }
            } catch (err) {
                console.log(err);
            }
        };

    }

    const Editar = event => {
        const id_editar = event.currentTarget.id;
        const obtenerDatos = async () => {
            const data = await fetch('http://localhost:9595/administrador/usuario/' + id_editar);
            const users = await data.json();
            setEditUsuario(users);
        }
        obtenerDatos();
        setLgShow(true);
    }

    const valida = () => {
        if (nombre === "") {
            var nom = document.getElementById("formBasicNombre").value;
            setNombre(nom);
        }
        if (apepat === "") {
            var apep = document.getElementById("formBasicApepat").value;
            setApepat(apep);
        }
        if (apemat === "") {
            var apem = document.getElementById("formBasicApemat").value;
            setApemat(apem);
        }
        if (correo === "") {
            var c = document.getElementById("formBasicEmail").value;
            setCorreo(c);
        }
        if (contrasenia === "") {
            var p = document.getElementById("formBasicPassword").value;
            setContrasenia(p)
        }
        if (usuario === "") {
            var u = document.getElementById("formBasicUsuario").value;
            setUser(u)
        }
        if (rolId === "") {

            var r = document.getElementById("formRol").value;
            setRolId(r)
        }
    }

    let handleEdit = async (e) => {
        e.preventDefault();
        const id_editar_val = document.getElementById('formId').value;

        try {
            let res = await fetch('http://localhost:9595/administrador/usuario/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apepat: apepat,
                    apemat: apemat,
                    correo: correo,
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rolId: rolId,
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setApepat("");
                setApemat("");
                setUser("");
                setCorreo("");
                setContrasenia("");
                setRolId("");
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario editado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al editar");

            }
        } catch (err) {
            console.log(err);
        }
    };

    let handleAgregar = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/registrar', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apepat: apepat,
                    apemat: apemat,
                    correo: correo,
                    usuario: usuario,
                    contrasenia: contrasenia,
                    rolId: rolId,
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setApepat("");
                setApemat("");
                setUser("");
                setCorreo("");
                setContrasenia("");
                setRolId("");
                console.log("El usuario se agrego con exito");
                Swal.fire({
                    icon: 'success',
                    title: 'El usuario se agrego con exito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al agregar el usuario");

            }
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Editar Usuario
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleEdit} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="number" value={EditUsuario.id} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicApepat">
                                        <Form.Label>ApePat</Form.Label>
                                        <Form.Control type="text" Value={EditUsuario.apepat} onChange={(e) => setApepat(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" Value={EditUsuario.correo} onChange={(e) => setCorreo(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" Value={EditUsuario.contrasenia} disabled />
                                    </Form.Group>
                                </Col>

                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" Value={EditUsuario.nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicApemat">
                                        <Form.Label>ApeMat</Form.Label>
                                        <Form.Control type="text" Value={EditUsuario.apemat} onChange={(e) => setApemat(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control style={{ height: '38px', margin: '0px', padding: '6px 12px' }} type="text" Value={EditUsuario.usuario} onChange={(e) => setUser(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRol">
                                        <Form.Label>Rol id</Form.Label>
                                        <Form.Control type="number" Value={EditUsuario.rolId} onChange={(e) => setRolId(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button style={{ width: '100%' }} className="btnp" variant="warning" type="submit" onClick={valida}>
                                Editar
                            </Button>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={AgregarShow}
                onHide={() => setAgregar(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleAgregar} >
                        <Container>
                            <Row>
                                
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicApemat">
                                        <Form.Label>ApeMat</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setApemat(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setUser(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formRol">
                                        <Form.Label>Rol id</Form.Label>
                                        <Form.Control type="number" onChange={(e) => setRolId(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicApepat">
                                        <Form.Label>ApePat</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setApepat(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" onChange={(e) => setCorreo(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" onChange={(e) => setContrasenia(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit">
                                Agregar
                            </Button>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className='Contenido'>
                <div className='Final'>

                    <Button className='Agregar' onClick={() => setAgregar(true)}  style={{marginRight: '50px'}} variant="success">Agregar</Button><br/><br/>
                    <Table id = "Data" striped bordered hover responsive="xl">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>ApePat</th>
                                <th>ApeMat</th>
                                <th>Correo</th>
                                <th>Usuario</th>
                                <th>Rol Id</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.apepat}</td>
                                        <td>{item.apemat}</td>
                                        <td>{item.correo}</td>
                                        <td>{item.usuario}</td>
                                        <td>{item.rolId}</td>
                                        <td>
                                            <Button id={item.id} onClick={Eliminar} variant="danger">Eliminar</Button>{' '}
                                            <Button id={item.id} onClick={Editar} variant="primary">Editar</Button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}


export {DashboardUsuarios}