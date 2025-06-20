import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About Us", url: "#about" },
    { name: "Cars", url: "#cars" },
    { name: "Services", url: "#services" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "Contact", url: "#contact" }
  ];
  
  const carCategories = [
    { name: "Luxury Sedans", url: "#" },
    { name: "SUVs", url: "#" },
    { name: "Sports Cars", url: "#" },
    { name: "Electric Vehicles", url: "#" },
    { name: "Hybrids", url: "#" },
    { name: "Convertibles", url: "#" }
  ];
  
  const customerService = [
    { name: "Financing Options", url: "#" },
    { name: "Trade-In Program", url: "#" },
    { name: "Warranty Information", url: "#" },
    { name: "Maintenance Services", url: "#" },
    { name: "FAQ", url: "#" },
    { name: "Privacy Policy", url: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="py-16">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-5 mb-lg-0">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">
                  <span className="text-secondary">Dream</span>Cars
                </h3>
                <p className="text-gray-300 text-sm">Your Destination for Luxury Vehicles</p>
              </div>
              
              <p className="text-gray-300 mb-4">
                At DreamCars, we're dedicated to providing an exceptional car buying experience. 
                Explore our premium selection and find your perfect drive today.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </Col>
            
            <Col lg={2} md={6} sm={6} className="mb-5 mb-lg-0">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="list-none p-0">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index} 
                    className="mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Col>
            
            <Col lg={3} md={6} sm={6} className="mb-5 mb-md-0">
              <h4 className="text-xl font-bold mb-4">Car Categories</h4>
              <ul className="list-none p-0">
                {carCategories.map((category, index) => (
                  <motion.li 
                    key={index} 
                    className="mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={category.url} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {category.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Col>
            
            <Col lg={3} md={6} sm={6}>
              <h4 className="text-xl font-bold mb-4">Customer Service</h4>
              <ul className="list-none p-0">
                {customerService.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.url} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 mb-md-0 text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} DreamCars. All Rights Reserved.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-300 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 