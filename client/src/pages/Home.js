//import { Link } from 'react-router-dom';
//import React, { useState } from'react';
//import Container from'react-bootstrap/Container';   
//import Button from'react-bootstrap/Button';
import PatientLogin from '../components/PatientLogin/PatientLogin';
//import medTechLogo from './medTechLogo.png';
//import medTechLogo2 from './medTechLogo2.png';
//import './App.css';
//import { useForm } from'react-hook-form';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Buttons from '../components/Buttons/Buttons';
// import SafetyTips from '../components/SafetyTips/SafetyTips';

const Home = () => {

    return (
        <>

             <Header/>
             <PatientLogin/>
             <Buttons/>
             {/* <SafetyTips/> */}
             <Footer/>    
      </>  
     );
};


export default Home;




