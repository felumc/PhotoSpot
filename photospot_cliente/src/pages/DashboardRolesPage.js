import { Container } from '../components/container/Container';
import { Footer } from "../components/general/Footer";
import { NavBarDashboard } from "../components/general/NavBarDashboard";
import { DashboardRoles } from "../components/dashboards/DashboardRoles";


function DashboardRolesPage() {
    return (
        <>
            <NavBarDashboard />
            <Container>
                <br/><h1 style={{textAlign: 'center'}}>Dashboard de Roles de PhotoSpot</h1><br/>
                <DashboardRoles />
            </Container>
            <Footer />
        </>
    )
}

export default DashboardRolesPage;