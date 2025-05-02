import React, {useEffect, useState }from "react";
import axios from "axios";
import { Card, CardBody,CardTitle,CardText, Container } from "reactstrap"; 
import { Helmet } from "react-helmet"; 


const News = () => {
    const [Articles, setArticles] = useState([]); //Store a article list return by api

    useEffect(() =>{
        axios
        .get("https://newsapi.org/v2/everything", {
            params:{
                q:'apple',
                from:'2025-04-28',
                to:'2025-04-28',
                sortBy:'popularity',
                apiKey:'c141912db1054605a12ed48f1c735f93',
            }    
        })
        .then(response => setArticles(response.data.articles))
        .catch(error => console.log("Error Fetching news:",error));
    },[]);

    return(
        <>    
        <Helmet>
                <meta charSet="utf-8" />\
                <meta name="description" content="Latest Technology News" />
                <meta name="keywords" content="Technology, News, Articles" />
                <title>News</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Container>
            
            <h2 className="text-center my-4">Latest Technology News</h2>
            {Articles.map((article, index) => {
                return (
                    <Container key={index} className="my-4">
                        <Card className="text-center" style={{ background: '#87ceeb' }}>
                            <CardBody>
                                <CardTitle className="font-weight-bold">{article.title}</CardTitle>
                                <CardText>{article.description}</CardText>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                            </CardBody>
                        </Card>
                    </Container>
                );
            })}
        </Container>
        </>

    );
};

export default News;
