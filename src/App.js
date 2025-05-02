import './App.css';
import Header from "./components/Header";
import Course from "./components/Course";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import Update from './components/Update';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const btnHandle = () => {
    toast.error("done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <HelmetProvider>
        <Router>
          <ToastContainer />
          <Header />
          <Container>
            <Row>
              <Col md={4}>
                <Menus />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="add-course" element={<Addcourse />} />
                  <Route path="update-course" element={<Update />} />
                  <Route path="view-course" element={<Allcourses />} />
                  <Route path="News" element={<News />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </HelmetProvider>
    </div>
  );
}
export default App;