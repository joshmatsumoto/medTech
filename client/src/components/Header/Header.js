import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <Container fluid>
            <h1 className='text-secondary'>
                MedTech
            </h1>

            <Navigation />
        </Container>
    );
}

export default Header;