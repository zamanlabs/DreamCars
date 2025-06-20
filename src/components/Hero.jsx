import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center min-h-screen bg-neutral overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="z-10">
        <Row className="items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Find Your <span className="text-secondary">Perfect</span> Drive
              </h1>
              <p className="text-lg mb-6 text-gray-700 max-w-lg">
                Explore our extensive collection of premium cars. From luxury sedans to powerful SUVs, 
                we have the perfect vehicle for every need and budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" className="btn-primary">
                  Explore Cars
                </Button>
                <Button variant="outline-secondary" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors">
                  Book a Test Drive
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">500+</h3>
                  <p className="text-sm text-gray-600">Car Models</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">1000+</h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">24/7</h3>
                  <p className="text-sm text-gray-600">Support</p>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury car" 
                  className="rounded-lg shadow-2xl w-full"
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg" 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="font-bold text-primary">Premium Quality</div>
                  <div className="text-sm text-gray-600">Certified Vehicles</div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 