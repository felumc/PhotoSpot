import { Container } from '../components/container/Container';
import { DashboardUsuarios } from '../components/dashboards/DashboardUsuarios';
import { Footer } from "../components/general/Footer";
import { NavBarDashboard } from "../components/general/NavBarDashboard";


function DashboardUsuariosPage() {
    return (
        <>
            <NavBarDashboard />
            <Container>
                <br/><h1 style={{textAlign: 'center'}}>Dashboard de Usuarios de PhotoSpot</h1><br/>
               <DashboardUsuarios /> 
            </Container>
            <Footer />
        </>
    )
}

export default DashboardUsuariosPage;