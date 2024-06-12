import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <main>
        <Helmet>
            <title>Home</title>
            <meta name="description"content="Home page of the phonebook."/>
            <meta name="keywords" content="phonebook" />
        </Helmet>
            <h2>Home page</h2>
        </main>
    );
};

export default Home;