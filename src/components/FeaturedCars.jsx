import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

// Sample car data
const carData = [
  {
    id: 1,
    name: "Audi A8 2023",
    category: "Sedan",
    price: 85000,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.0L V6",
      power: "335 HP",
      acceleration: "5.6s (0-60mph)",
      topSpeed: "155 mph"
    },
    featured: true,
    new: true
  },
  {
    id: 2,
    name: "BMW X7 2023",
    category: "SUV",
    price: 92000,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "4.4L V8",
      power: "523 HP",
      acceleration: "4.5s (0-60mph)",
      topSpeed: "155 mph"
    },
    featured: true
  },
  {
    id: 3,
    name: "Mercedes GLE 2023",
    category: "SUV",
    price: 78000,
    image: "https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&w=800",
    specs: {
      engine: "3.0L Inline-6",
      power: "429 HP",
      acceleration: "4.9s (0-60mph)",
      topSpeed: "155 mph"
    },
    featured: true,
    new: true
  },
  {
    id: 4,
    name: "Porsche 911 2023",
    category: "Sports Car",
    price: 110000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "3.0L Flat-6",
      power: "379 HP",
      acceleration: "4.0s (0-60mph)",
      topSpeed: "182 mph"
    },
    featured: true
  },
  {
    id: 5,
    name: "Tesla Model S 2023",
    category: "Electric",
    price: 95000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    specs: {
      engine: "Dual Motor",
      power: "670 HP",
      acceleration: "3.1s (0-60mph)",
      topSpeed: "155 mph"
    },
    featured: true,
    new: true
  },
  {
    id: 6,
    name: "Range Rover Sport 2023",
    category: "SUV",
    price: 82000,
    image: "https://cdn.pixabay.com/photo/2018/02/21/03/15/range-rover-3169357_1280.jpg",
    specs: {
      engine: "3.0L I6",
      power: "395 HP",
      acceleration: "5.9s (0-60mph)",
      topSpeed: "140 mph"
    },
    featured: true
  }
];

const FeaturedCars = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Sedan', 'SUV', 'Sports Car', 'Electric'];
  
  const filteredCars = filter === 'All' 
    ? carData 
    : carData.filter(car => car.category === filter);

  return (
    <section id="cars" className="py-16 bg-white">
      <Container>
        <div className="section-title">
          <h2 className="text-4xl font-bold text-center">Featured Cars</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            Explore our hand-picked selection of premium vehicles, each one representing the 
            pinnacle of automotive excellence.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <Row>
          {filteredCars.map((car, index) => (
            <Col key={car.id} lg={4} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg h-100 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Card.Img 
                      variant="top" 
                      src={car.image} 
                      className="object-cover h-48 transform hover:scale-110 transition-transform duration-500"
                    />
                    {car.new && (
                      <Badge 
                        bg="danger" 
                        className="position-absolute top-0 end-0 m-2"
                      >
                        NEW
                      </Badge>
                    )}
                  </div>
                  <Card.Body>
                    <div className="flex justify-between items-center mb-2">
                      <Badge bg="secondary" className="text-xs">{car.category}</Badge>
                      <span className="text-primary font-bold">${car.price.toLocaleString()}</span>
                    </div>
                    <Card.Title className="text-xl font-bold">{car.name}</Card.Title>
                    
                    <div className="grid grid-cols-2 gap-2 my-3 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span>{car.specs.engine}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <span>{car.specs.power}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span>{car.specs.acceleration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <span>{car.specs.topSpeed}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <button className="btn-primary flex-1 py-2 text-sm">
                        View Details
                      </button>
                      <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-8">
          <button className="btn-secondary">
            View All Cars
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCars; 