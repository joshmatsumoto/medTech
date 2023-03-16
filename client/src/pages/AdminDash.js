import AdminNavBar from "../components/Navigation/AdminNavigation";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SafetyTips from '../components/SafetyTips/SafetyTips';

const AdminDashboardNavs = () =>{
    return (
      <>
        <AdminNavBar/>
        <SafetyTips/>
        <Footer/>
      </>
      );

  };

  
  export default AdminDashboardNavs;