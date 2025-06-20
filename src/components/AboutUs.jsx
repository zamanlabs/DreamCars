import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Every vehicle goes through a rigorous 150-point inspection to ensure top quality."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "No hidden fees. We believe in complete transparency throughout your buying journey."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Flexible Financing",
      description: "Customized financing options to suit your budget and timeline."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Comprehensive Warranty",
      description: "Every purchase comes with our extensive warranty program for your peace of mind."
    }
  ];

  return (
    <section id="about" className="py-16 bg-neutral">
      <Container>
        <div className="section-title mb-12">
          <h2 className="text-4xl font-bold text-center">About DreamCars</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            With over 25 years in the automotive industry, we've established ourselves as 
            leaders in premium car sales with unmatched customer service.
          </p>
        </div>

        <Row className="items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="bg-primary/10 absolute -z-10 rounded-lg w-full h-full top-4 left-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Car dealership" 
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                  <div className="font-bold text-primary">Established 1998</div>
                  <div className="flex items-center gap-1">
                    <div className="text-secondary font-bold text-2xl">25+</div>
                    <div>years of excellent service</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-4">Your Trusted Partner in Finding the Perfect Vehicle</h3>
              <p className="text-gray-700 mb-6">
                At DreamCars, we don't just sell vehicles – we match people with their perfect drive. Our 
                passion for automobiles and commitment to customer satisfaction drives everything we do.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of expert advisors brings years of industry experience and a genuine enthusiasm for 
                helping customers find exactly what they're looking for. Whether you're seeking luxury, performance, 
                comfort, or practicality, we have the expertise and inventory to meet your needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs; 