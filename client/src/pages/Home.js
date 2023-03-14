import { Link } from 'react-router-dom';

const Home = () => {
    const { loading, data } = useQuery(GET_POSTS);
    fet
    const posts = data?.posts || [];
    return (
        <div>
            <h1 style="text-align :center">Welcome to Our Clinic</h1>
            {loading? (
                <div>Loading...</div>