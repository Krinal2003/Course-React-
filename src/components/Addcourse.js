import React, { Fragment } from "react";
import {Form, Input,FormGroup, Container, } from "reactstrap";
import { Button } from "reactstrap";
import { Helmet } from "react-helmet";
const Addcourse = () => {
return(
<Fragment>
<Helmet>
                <meta charSet="utf-8" />
                <title>AddCourse</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<Form className="container mt-5 text-center" style={{ background: "#87ceeb" }}>
    <h1 className="text-center my-4">Fill Course Detail</h1>
    <FormGroup>
    <label>Course Id</label>
    <Input type="text" 
        placeholder="Enter Id Here"
        name="userId" 
        id ="userId"/>  
</FormGroup>
<FormGroup>
    <label>Course Title</label>
    <Input type="text" 
        placeholder="Enter Title Here"
        name="userId" 
        id ="Title"/>  
</FormGroup>
<FormGroup>
    <label> Course Description </label>
    <Input type="textarea"
    placeholder="Enter Description Here"
    id ="Description"
    style={{height:100}}/>
    </FormGroup>
    <FormGroup>
        <label>Course Duration</label>
        <Input type="text"
        placeholder="Enter Duration  Here"
        id="Duration"
        />
        </FormGroup>
        <Container className="text-center">
            <Button className="btn-submit">AddCourse</Button>
            <Button className="btn-clear mx-2"> Clear </Button>
        </Container>
        </Form>
</Fragment>
);
};
export default Addcourse;