import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { 
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,}from 'reactstrap';

const Course =({course}) =>{
    useEffect(() => {
          document.title = "View Course | My Course Application";
      }, []);
return(
  <>
   {/* <Helmet>
  <title>View Course | My Course Application</title>
  <meta charSet="utf-8" />
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet> */}

  <Card  className="text-center">
   
    <CardBody>
      <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
      <CardText>{course.description}</CardText>
      <Container className="text-center">
        <Button color="danger">Delete</Button>
        <Button color="warning mx-4">Update</Button>
      </Container>
    </CardBody>
  </Card>
  </>
)
}

export default Course;