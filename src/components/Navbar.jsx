import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BootstrapNavbar 
        expand="lg" 
        fixed="top" 
        className={`transition-all duration-300 py-3 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <Container>
          <BootstrapNavbar.Brand href="#" className="font-bold text-xl text-primary">
            <span className="text-secondary">Dream</span>Cars
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-2 font-medium">Home</Nav.Link>
              <Nav.Link href="#cars" className="mx-2 font-medium">Cars</Nav.Link>
              <Nav.Link href="#about" className="mx-2 font-medium">About</Nav.Link>
              <Nav.Link href="#services" className="mx-2 font-medium">Services</Nav.Link>
              <Nav.Link href="#testimonials" className="mx-2 font-medium">Testimonials</Nav.Link>
              <Nav.Link href="#contact" className="mx-2 font-medium">Contact</Nav.Link>
              <Nav.Link href="#" className="mx-2 btn-primary">
                Find Your Car
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
};

export default Navbar; 