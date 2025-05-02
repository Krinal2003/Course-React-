import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';

const Home = () => {
    useEffect(() => {
    document.title = "Home | My Course Application";
},[]);
    return (
        <div>  
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Welcome to My Course Application" />
                <meta name="keywords" content="React, Course, Application" />
                <meta name="author" content="Your Name" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>   
            <div className='my-4' style={{ background: '#87ceeb', padding: '2rem', textAlign: 'center', borderRadius: '0.5rem' }}>
                <h1>Welcome</h1>
                <p>Your journey to learning React starts here!</p>
                <p>Join us for an exciting adventure in web development.</p>
                <Container>
                    <Button color="primary">Start Using</Button> 
                </Container>
            </div>
        </div>
    );
}

export default Home;
