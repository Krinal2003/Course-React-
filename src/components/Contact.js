import React from "react";
import { Helmet } from "react-helmet";

const Contact =()=>{
    return(
        <div className="text-center" style ={{background:'#87ceeb'}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="my-4">Contact US</h1>
        <p>For any queries, please reach out to us at:</p>
        <p> Email:</p>
        <p>Phone:</p>
        <p>Address:</p>
            </div>
    )
}

export default Contact;