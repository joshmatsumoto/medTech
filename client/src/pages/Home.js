import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
        <Container fluid>
         <img src={medTechLogo2} alt="medTech Logo" className="App-logo" /> 
         <h1 className="App-title">MedTech</h1>
         </Container>
     
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
             {showAlert && ( 
                 <Alert dismissible onClose={() => setShowAlert(false)} variant='danger'>
                     Something went wrong with your login or password!   
                 </Alert> 
             )}
     
             <div className='text-dark text-start'> 
                 <Link to="/PatientLogin">Patient Login</Link> 
                 <PatientLogin/>  
             </div>        
     
         </Form>
     
        <Container Fluid>
        <img src={medTechLogo} alt="medTech Logo" />
        </Container>
     
      </>  
     );
};


export default Home;