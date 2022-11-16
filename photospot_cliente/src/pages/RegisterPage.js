import { Container } from '../components/container/Container';
import '../components/styles/registerUsers.css';
import RegisterUsers from '../components/register/RegisterUsers';

function RegisterPage() {
    return (
        <>
            <Container>
                <RegisterUsers />
            </Container>
        </>
    )
}

export default RegisterPage;