import DoctorNavBar from "../components/Navigation/DoctorNavigation";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SafetyTips from '../components/SafetyTips/SafetyTips';
const DocDashboardNavs = () =>{
    return (
      <>
        <DoctorNavBar/>
        <SafetyTips/>
        <Footer/>
      </>
      );

  };

  
  export default DocDashboardNavs;