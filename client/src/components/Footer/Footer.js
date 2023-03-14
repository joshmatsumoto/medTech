import Container from 'react-bootstrap/Container';
import medTechLogo from '../../assets/medTechLogoNoWhite.png';

function Footer() {
  return (
    <Container fluid>
      <img src={medTechLogo} alt="medTech Logo" />
    </Container>
  );
}

export default Footer;

