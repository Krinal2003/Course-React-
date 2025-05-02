import React ,{Fragment} from "react";
import { Container } from "reactstrap";
import {Form, Input , FormGroup, Label} from "reactstrap";
import {Button} from "reactstrap";
import { Helmet } from "react-helmet";
const Update = () => {

return(
<Fragment>
<Form className="container mt-5 text-center" style={{ background: "#87ceeb" }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>UpdateCourse</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <h1 className="text-center my-4">UpdateCourse</h1>
    <FormGroup>
        <label>Update Course</label>
        <Input type="text"
        placeholder="Enter Course Id Here"
        name="userId"
        id="userId"
        />
        </FormGroup>
        <FormGroup>
        <label>Course Title</label>
        <Input type="text"
        placeholder="Enter Title Here"
        name="userId"
        id="Title"/>
        </FormGroup>
        <FormGroup>
        <Label>Course Description</Label>
        <Input type="textarea"
        placeholder="Enter Description Here"
        id="Description"
        />
        </FormGroup>
        <FormGroup>
        <Label>Course Duration</Label>
        <Input type="text"
        placeholder="Enter Duration Here"
        id="Duration"
        />
        </FormGroup>
        <Container className="text-center">
            <Button color="success">Update</Button>
            <Button color="warning mx-2">Clear</Button>
        </Container>
</Form> 
</Fragment>
);
};
export default Update;