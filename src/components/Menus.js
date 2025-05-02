import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Helmet } from "react-helmet";
const Menus =()=>{
    return(
        <ListGroup className="my-4" style={{background: "#87ceeb"}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Link className="list-group-item list-group-item-action" tag={"a"} to="/" action>Home</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/add-course" action>Add Course</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/update-course" action>Update Courses</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/view-course" action>View Courses</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/about" action>About</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/contact" action>Contact</Link>
            <Link  className="list-group-item list-group-item-action" tag={"a"} to="/news" action>News</Link>        </ListGroup>
    )
}

export default Menus;