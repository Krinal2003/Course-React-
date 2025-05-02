import './App.css';
import Header from "./components/Header";
import Course from "./components/Course";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer , toast} from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Update from './components/Update';
import { Container} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import {Helmet} from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const btnHandle = ()=>{
    toast.error("done",{
      position: "top-center",
    });
  };
  return (

  <div> 
    <HelmetProvider>  
    <Router>
    <ToastContainer />
      <Header />
      {/* <Course />
      <Home />
      <AllCourses />
      <Addcourse />
      <Update /> */}

      <Container>
        <Row>
          <Col md={4}>
          <Menus />
          </Col>
          <Col md={8}>
          <Router basename='/tothepoint-react'>
          <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="add-course" Component={Addcourse} exact/>
        <Route path="update-course" Component={Update} exact/>  
        <Route path="view-course" Component={Allcourses} exact/>
        <Route path="News" Component={News} exact/>
        <Route path="about" Component={About} exact/>
        <Route path="contact" Component={Contact} exact/>
        </Routes>
        </Router>
          </Col>
        </Row>
      </Container>
    
    </Router>
    </HelmetProvider>
  </div>
  
    );
}

export default App;
