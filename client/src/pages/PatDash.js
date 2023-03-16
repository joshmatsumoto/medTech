import PatientNavBar from "../components/Navigation/PatientNavigation";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SafetyTips from '../components/SafetyTips/SafetyTips';

const PatDashboardNavs = () =>{
    return (
      <>
        <PatientNavBar/>
        <SafetyTips/>
        <Footer/>
      </>
      );

  };

  
  export default PatDashboardNavs;