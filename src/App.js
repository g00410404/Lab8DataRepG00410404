// Importing necessary CSS files and React components
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';

// Importing necessary React Bootstrap components and React Router components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing specific components for different routes
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

// Main App component
function App() {
  return (
    // Setting up React Router with BrowserRouter
    <BrowserRouter>
      <div className="App">
        {/* Navbar for navigation */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Defining routes using React Router's Routes and Route components */}
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>

        {/* Uncomment the following lines if you want to use Header, Content, and Footer components */}
        {/* <Header></Header>
        <Content></Content>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
