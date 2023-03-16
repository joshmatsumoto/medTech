//import { Link } from 'react-router-dom';
import React from'react';
//import Container from'react-bootstrap/Container';
//import Button from'react-bootstrap/Button';
import PatientLogin from '../components/PatientLogin/PatientLogin';
//import medTechLogo from './medTechLogo.png';
//import medTechLogo2 from './medTechLogo2.png';
//import './App.css';
//import { useForm } from'react-hook-form';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AdminBtn from '../components/Buttons/AdminLoginBtn';
import  DocBtn from '../components/Buttons/DocLoginBtn';
import SafetyTips from '../components/SafetyTips/SafetyTips';



const Home = () => {

    return (
        <>
             <Header/>
             <div>
            <SafetyTips/>

             </div>
             <PatientLogin/>

             <div className='d-flex justify-content-center gap-3'>
             <DocBtn/>
             
             <AdminBtn/>
             </div>

             <Footer/>
      </>
     );
};


export default Home;
