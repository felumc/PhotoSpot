import { Container } from '../components/container/Container';
import { Footer } from "../components/general/Footer";
import { NavBarDashboard } from "../components/general/NavBarDashboard";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function DashboardPage() {
    return (
        <>
            <NavBarDashboard />
            <Container>
                <br/><h1 style={{textAlign: 'center'}}>Dashboard de PhotoSpot</h1><br/>
                <Button variant="primary">Agregar Usuario</Button> <Button variant="success">Exportar Usuarios</Button><br/><br/>
                <Table striped responsive="sm">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Correo</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Luis</td>
                        <td>Morales</td>
                        <td>Calvo</td>
                        <td>luismc2211@gmail</td>
                        <td>felumc</td>
                        <td><Button variant="warning">Editar</Button> <Button variant="danger">Eliminar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Eduardo</td>
                        <td>Varela</td>
                        <td>Hernandez</td>
                        <td>varela@gmail.com</td>
                        <td>varela</td>
                        <td><Button variant="warning">Editar</Button> <Button variant="danger">Eliminar</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Hendrick</td>
                        <td>Rasgado</td>
                        <td>Matus</td>
                        <td>hendrick@gmail.com</td>
                        <td>hendruch</td>
                        <td><Button variant="warning">Editar</Button> <Button variant="danger">Eliminar</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    )
}

export default DashboardPage;