import Container from 'react-bootstrap/Container';
import medTechLogo2 from '../../assets/medTechLogoNoWhite.png';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <Container fluid>
            <img src={medTechLogo2} alt="medTech Logo"/>
            <Navigation />
        </Container>
    );
}

export default Header;
