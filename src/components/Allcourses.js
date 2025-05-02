import React, { useState } from "react";
import Courses from "./Course";
import { Helmet } from "react-helmet";


const Allcourses = () => {
    const [courses, setCourses] = useState([
        { title: "Java Course", description: "This is a demo Course" },
        { title: "Python Course", description: "This is a demo Course" },
        { title: "JavaScript Course", description: "This is a demo Course" },
    ]);

    return (
        <div className="container mt-5 text-center" style={{ background: "#87ceeb" }}>
            <Helmet>
                <meta charSet="utf-8" />
                    <title>Course Name | Your Website</title>
                    <meta name="description" content="Brief description of your course, including benefits or key topics." />
                    <meta property="og:title" content="Course Name | Your Website" />
                    <meta property="og:description" content="Brief description of your course, including benefits or key topics." />
                    <meta property="og:type" content="website" />

                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>All Courses</h1>
            <p>List of Courses Are as follows:</p>
            {courses.length > 0 
                ? courses.map((item, index) => <Courses key={index} course={item} />)
                : "No courses available"}
        </div>
    );
};

export default Allcourses;