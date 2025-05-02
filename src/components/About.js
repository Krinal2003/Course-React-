import React from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
const About = () => {
   return(
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

            <Container className="my-4" style={{ background: "#87ceeb", padding: "20px", borderRadius: "10px" }}>
                <h1>About Us</h1>
                <p>Welcome to My Course Application!</p>
                <p>We are dedicated to providing the best learning experience for our users.</p>
                <p>Our mission is to make learning accessible and enjoyable for everyone.</p>
                <p>Join us on this exciting journey of knowledge and growth!</p>
                <p>For any inquiries, feel free to contact us.</p>
                <p>Thank you for choosing My Course Application!</p>
                <p>Happy Learning!</p>
            </Container>
        </>
    );
};

export default About;
