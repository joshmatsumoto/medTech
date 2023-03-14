import { Link } from 'react-router-dom';

const Home = () => {
    const { loading, data } = useQuery();
    fet
    const posts = data?.posts || [];
    return (
       <>
       <Container fluid>
        <img src={medTechLogo2} alt="medTech Logo" className="App-logo" /> 
        <h1 className="App-title">MedTech</h1>
        </Container>
        <Container className='text-dark text-start'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your login or password!   
                </Alert>
        <div>
        <Link to="/PatientLogin">Patient Login</Link>
        <PatientLogin />
       </div>        
       </Container>
       <Container Fluid>


       </Container>
     </>  
    );
};


export default Home;