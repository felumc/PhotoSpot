import React from 'react';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function DashboardRoles() {

    const [roles, setRoles] = React.useState([]);
    const [AgregarShow, setAgregar] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [EditRol, setEditRol] = React.useState([]);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [isCrear, setisCrear] = useState(false);
    const [isActualizar, setisActualizar] = useState(false);
    const [isBorrar, setisBorrar] = useState(false);

    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:9595/administrador/roles/');
        const users = await data.json();
        setRoles(users);
    }

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    const Eliminar = event => {
        const id_eliminar = event.currentTarget.id;
        Swal.fire({
            title: '¿Seguro de eliminar el rol?',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            buttonsStyling: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Rol eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                borra();
            }
        })

        let borra = async () => {
            try {
                let res = await fetch('http://localhost:9595/administrador/rol/' + id_eliminar, {
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
                    console.log("Rol eliminado con exito")
                } else {
                    console.log("Error al eliminar");
                }
            } catch (err) {
                console.log(err);
            }
        };
    }

    const Editar = event => {
        setEditRol("");
        const id_editar = event.currentTarget.id;
        const obtenerDatos = async () => {
            const data = await fetch('http://localhost:9595/administrador/rol/' + id_editar);
            const roles = await data.json();
            setEditRol(roles);
        }
        obtenerDatos();
        setLgShow(true);
    }

    const validar = () => {
        if (nombre === "") {
            var n = document.getElementById("formNombre").value;
            setNombre(n);
        }
        if (descripcion === "") {
            var d = document.getElementById("formDescripcion").value;
            setDescripcion(d)
        }
        if (isCrear === "") {
            var uc = document.getElementById("formIsCrear").value;
            setisCrear(uc)
        }
        if (isActualizar === "") {
            var ua = document.getElementById("formIsActualizar").value;
            setisActualizar(ua)
        }
        if (isBorrar === "") {
            var ub = document.getElementById("formIsBorrar").value;
            setisBorrar(ub)
        }
    }

    let handleEdit = async (e) => {
        e.preventDefault();
        const id_editar_val = document.getElementById('formId').value;
        try {
            let res = await fetch('http://localhost:9595/administrador/rol/' + id_editar_val, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    descripcion: descripcion,
                    isCrear: isCrear,
                    isActualizar: isActualizar,
                    isBorrar: isBorrar
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setDescripcion("");
                setisCrear("");
                setisActualizar("");
                setisBorrar("");
                console.log("La edición fue exitosa");
                Swal.fire({
                    icon: 'success',
                    title: 'Rol editado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al editar");
                console.log(nombre);
                console.log(descripcion);
                console.log(isCrear);
                console.log(isActualizar);
                console.log(isBorrar);
            }
        } catch (err) {
            console.log(err);
        }
    };

    let handleAgregar = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:9595/administrador/rol', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    descripcion: descripcion,
                    isCrear: isCrear,
                    isActualizar: isActualizar,
                    isBorrar: isBorrar,
                }),
            });
            if (res.status === 200) {
                setNombre("");
                setDescripcion("");
                setisCrear("");
                setisActualizar("");
                setisBorrar("");
                console.log("El rol se agrego con exito");
                Swal.fire({
                    icon: 'success',
                    title: 'Rol agregado con exito',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload()
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                console.log("Ocurrio un error al agregar el rol");
                console.log(isCrear);

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
                        Editar Rol
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleEdit} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="number" value={EditRol.id} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formDescripcion">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type="text" Value={EditRol.descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                                    </Form.Group>
                                    
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" Value={EditRol.nombre} onChange={(e) => setNombre(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formIsCrear">
                                        <Form.Check type="checkbox"  onClick={(e) => setisCrear(e.target.checked)} Value={EditRol.isCrear} label="Agregar usuarios" defaultChecked={EditRol.isCrear} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formIsActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setisActualizar(e.target.checked)} Value={EditRol.isActualizar} label="Modificar usuarios" defaultChecked={EditRol.isActualizar} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formIsBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setisBorrar(e.target.checked)} Value={EditRol.userEliminar} label="Eliminar usuarios" defaultChecked={EditRol.isBorrar} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button style={{ width: '100%' }} className="btnp" variant="warning" type="submit" onClick={validar}>
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
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agregar Rol
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handleAgregar} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formDescripcion">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type="text"onChange={(e) => setDescripcion(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formIsCrear">
                                        <Form.Check type="checkbox"  onClick={(e) => setisCrear(e.target.checked)} label="Agregar usuarios" />
                                    </Form.Group><br/>
                                    <Form.Group className="mb-3" controlId="formIsActualizar">
                                        <Form.Check type="checkbox" onClick={(e) => setisActualizar(e.target.checked)} label="Modificar usuarios" />
                                    </Form.Group><br/>
                                    <Form.Group className="mb-3" controlId="formIsBorrar">
                                        <Form.Check type="checkbox" onClick={(e) => setisBorrar(e.target.checked)} label="Eliminar usuarios" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button style={{ width: '100%' }} className="btnp" variant="success" type="submit">
                                Agregar Rol
                            </Button>


                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>

            <div className='Contenido'>
                <div className='Final'>
                    <Button className='Agregar' onClick={() => setAgregar(true)} variant="success">Agregar Rol</Button><br/><br/>
                    <Table striped bordered hover responsive="xl" className='Big' >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Crear</th>
                                <th>Actualizar</th>
                                <th>Borrar</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.isCrear.toString()}</td>
                                        <td>{item.isActualizar.toString()}</td>
                                        <td>{item.isBorrar.toString()}</td>
                                        <td>
                                            <Button id={item.id} onClick={Eliminar} variant="danger" style={{marginRight: '10px'}}>Eliminar</Button>
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
export {DashboardRoles}