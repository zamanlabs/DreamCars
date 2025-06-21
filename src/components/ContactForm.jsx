import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  const interestOptions = [
    'New Vehicles',
    'Pre-owned Vehicles',
    'Vehicle Financing',
    'Trade-In Evaluation',
    'Test Drive Booking',
    'Service & Maintenance',
    'Other'
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <Container>
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 px-4 md:px-0 text-sm md:text-base">
            Have questions or ready to find your dream car? Our team is here to help you every step of the way.
          </p>
        </div>
        
        <Row className="mt-6 md:mt-10">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/5 p-4 md:p-8 rounded-2xl h-100">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get In Touch</h3>
                
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-primary/10 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Phone</h4>
                    <p className="text-gray-700 text-sm md:text-base">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-primary/10 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Email</h4>
                    <p className="text-gray-700 text-sm md:text-base">info@dreamcars.com</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-primary/10 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Location</h4>
                    <p className="text-gray-700 text-sm md:text-base">123 Luxury Lane, Carville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-2 md:p-3 mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Business Hours</h4>
                    <p className="text-gray-700 text-sm md:text-base">Mon - Sat: 9AM - 7PM</p>
                    <p className="text-gray-700 text-sm md:text-base">Sunday: 11AM - 5PM</p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                  <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white shadow-lg rounded-2xl p-4 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-6 md:py-10"
                  >
                    <div className="text-5xl md:text-6xl mb-4 text-green-500">✓</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-700 text-sm md:text-base">
                      Your message has been received. Our team will contact you shortly!
                    </p>
                  </motion.div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 md:mb-4">
                      <Form.Label className="font-medium text-sm md:text-base">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="py-2 md:py-3 border-gray-300 rounded-md"
                      />
                    </Form.Group>
                    
                    <Row>
                      <Col md={6} className="mb-3 md:mb-0">
                        <Form.Group className="mb-3 md:mb-4">
                          <Form.Label className="font-medium text-sm md:text-base">Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="py-2 md:py-3 border-gray-300 rounded-md"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3 md:mb-4">
                          <Form.Label className="font-medium text-sm md:text-base">Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="py-2 md:py-3 border-gray-300 rounded-md"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3 md:mb-4">
                      <Form.Label className="font-medium text-sm md:text-base">Area of Interest</Form.Label>
                      <Form.Select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="py-2 md:py-3 border-gray-300 rounded-md"
                      >
                        <option value="">Select your area of interest</option>
                        {interestOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3 md:mb-4">
                      <Form.Label className="font-medium text-sm md:text-base">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={3}
                        className="border-gray-300 rounded-md"
                      />
                    </Form.Group>
                    
                    <Button 
                      type="submit" 
                      className="btn-primary w-100 py-2 md:py-3 text-sm md:text-base"
                    >
                      Send Message
                    </Button>
                  </Form>
                )}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm; 