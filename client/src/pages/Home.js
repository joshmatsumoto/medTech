import { Link } from 'react-router-dom';

const Home = () => {
    const { loading, data } = useQuery();
    fet
    const posts = data?.posts || [];
    return (
       <>
       <container fluid>
        <img src={medTechLogo2} alt="medTech Logo" className="App-logo" /> 
       </>
    )
};


export default Home;