import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    position: "Business Executive",
    testimonial: "DreamCars exceeded my expectations in every way. Their team took the time to understand exactly what I was looking for and found me the perfect luxury sedan within my budget. The buying process was seamless and transparent.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    car: "BMW 7 Series"
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Marketing Director",
    testimonial: "After visiting several dealerships, DreamCars stood out with their exceptional customer service and extensive inventory. I felt no pressure and their financing options were better than competitors. My new SUV is perfect for my family's needs!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    car: "Mercedes GLE"
  },
  {
    id: 3,
    name: "David Thompson",
    position: "Software Engineer",
    testimonial: "As a tech enthusiast, I wanted a vehicle with cutting-edge features. The team at DreamCars guided me through all the latest technologies and helped me find a car that perfectly aligned with my interests and lifestyle.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    car: "Tesla Model S"
  },
  {
    id: 4,
    name: "Emily Parker",
    position: "Healthcare Professional",
    testimonial: "The home delivery service from DreamCars was a game-changer for me. With my busy schedule, being able to complete the entire purchase online and have my car delivered to my door was incredibly convenient.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    car: "Audi Q5"
  },
  {
    id: 5,
    name: "Robert Wilson",
    position: "Retired Teacher",
    testimonial: "I was hesitant about trading in my old vehicle, but DreamCars offered a fair price and made the process easy. Their after-sale support has been excellent, and I couldn't be happier with my new car.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    car: "Lexus ES"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-neutral">
      <Container>
        <div className="section-title">
          <h2 className="text-4xl font-bold text-center">Customer Testimonials</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            Hear what our satisfied customers have to say about their experience with DreamCars.
          </p>
        </div>
        
        <div className="relative mt-12 mb-10 overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-neutral to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-neutral to-transparent z-10"></div>
          
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {testimonial.car}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  
                  <div className="mt-6 text-right">
                    <svg className="inline-block w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
              } transition-all`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <Row className="mt-16">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Recommendation Rate</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials; 