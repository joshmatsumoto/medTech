import AdminNavBar from "../components/Navigation/AdminNavigation";

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