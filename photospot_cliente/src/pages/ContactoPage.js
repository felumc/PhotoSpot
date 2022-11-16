import { Container } from '../components/container/Container';
import { Footer } from "../components/general/Footer";
import { NavBar } from "../components/general/NavBar";
import Contacto from '../components/contacto/Contacto';

function ContactoPage() {
    return (
        <>
            <NavBar />
            <Container>
                <Contacto />
                
            </Container>
            <Footer />
        </>
    )
}

export default ContactoPage;