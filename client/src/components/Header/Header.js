import Container from 'react-bootstrap/Container';
import medTechLogo2 from '../../assets/medTechLogoNoWhite.png';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <div>
            <img src={medTechLogo2} alt="medTech Logo"/>
            <Navigation />
        </div>
    );
}

export default Header;
