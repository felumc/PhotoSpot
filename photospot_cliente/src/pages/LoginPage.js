import { Container } from '../components/container/Container';
import '../components/styles/loginUsers.css';
import LoginUsers from '../components/login/LoginUsers';

function LoginPage() {
    return (
        <>
            <Container>
                <LoginUsers />
            </Container>
        </>
    )
}

export default LoginPage;