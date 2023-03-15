import PatientNavBar from "../components/Navigation/PatientNavigation";
import AdminNavBar from "../components/Navigation/AdminNavigation";
import DoctorNavBar from "../components/Navigation/DoctorNavigation";


function DashboardNavs(props) {
  const loggedIn = props.loggedIn;

  if ( this.props.userType === "ADMINISTRATOR" ) {
    return <AdminNavBar />;
  } else if ( this.props.userType === "DOCTOR" ) {
    return <DoctorNavBar />;
  } else  {
    return <PatientNavBar />;
}
}

export default DashboardNavs;
