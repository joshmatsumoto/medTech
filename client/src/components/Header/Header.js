import Container from 'react-bootstrap/Container';
import medTechLogo2 from '../../assets/medTechLogoNoWhite.png';

function Header() {
    return (
        <Container fluid>
            <img src={medTechLogo2} alt="medTech Logo"/>
        </Container>
    );
}

export default Header;
