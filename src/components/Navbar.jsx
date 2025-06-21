import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
        expanded={expanded}
        onToggle={setExpanded}
        className={`transition-all duration-300 py-2 ${scrolled ? 'bg-white shadow-lg' : expanded ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      >
        <Container>
          <BootstrapNavbar.Brand href="#" className="font-bold text-xl text-primary">
            <span className="text-secondary">Dream</span>Cars
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="border-0 focus:outline-none"
          />
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="mt-2 mt-lg-0">
            <Nav className="ms-auto text-center text-lg-start">
              <Nav.Link href="#home" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#cars" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>Cars</Nav.Link>
              <Nav.Link href="#about" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>About</Nav.Link>
              <Nav.Link href="#services" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>Services</Nav.Link>
              <Nav.Link href="#testimonials" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
              <Nav.Link href="#contact" className="mx-1 my-1 my-lg-0 font-medium" onClick={() => setExpanded(false)}>Contact</Nav.Link>
              <Nav.Link 
                href="#" 
                className="mx-1 my-2 my-lg-0 btn-primary w-full md:w-auto text-center" 
                onClick={() => setExpanded(false)}
              >
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