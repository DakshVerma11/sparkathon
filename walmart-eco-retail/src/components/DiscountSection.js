import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaClock, FaBell } from 'react-icons/fa';
import ProductCard from './ProductCard';

const DiscountSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };
  
  // Sample products with expiration dates
  const expiringProducts = [
    {
      id: 1,
      name: "Organic Salmon Fillet",
      description: "Premium wild-caught salmon, rich in omega-3 fatty acids.",
      price: 499.99,
      daysUntilExpiry: 1,
      image: "https://via.placeholder.com/300x200?text=Salmon",
      isEcoFriendly: true,
      carbonFootprint: 0.8
    },
    {
      id: 2,
      name: "Fresh Greek Yogurt",
      description: "Creamy probiotic yogurt made with organic milk.",
      price: 120.00,
      daysUntilExpiry: 2,
      image: "https://via.placeholder.com/300x200?text=Yogurt",
      isEcoFriendly: true,
      carbonFootprint: 0.3
    },
    {
      id: 3,
      name: "Organic Avocados",
      description: "Perfectly ripe Hass avocados, ready to eat.",
      price: 179.99,
      daysUntilExpiry: 3,
      image: "https://via.placeholder.com/300x200?text=Avocados",
      isEcoFriendly: true,
      carbonFootprint: 0.2
    },
    {
      id: 4,
      name: "Fresh Baked Bread",
      description: "Artisanal sourdough bread, baked fresh daily.",
      price: 75.00,
      daysUntilExpiry: 1,
      image: "https://via.placeholder.com/300x200?text=Bread",
      isEcoFriendly: true,
      carbonFootprint: 0.4
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5 align-items-center">
          <Col lg={8}>
            <h2 className="section-title">Save Food, Save Money</h2>
            <p className="lead">
              We automatically discount products as they approach their expiration date. 
              Help reduce food waste while enjoying great savings!
            </p>
          </Col>
          <Col lg={4}>
            <Card className="bg-light border-0">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaClock className="text-warning me-2 fs-4" />
                  <h5 className="mb-0">Dynamic Discount Scale</h5>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">7 days before expiry: <span className="fw-bold text-success">10% off</span></li>
                  <li className="mb-2">5 days before expiry: <span className="fw-bold text-success">20% off</span></li>
                  <li className="mb-2">3 days before expiry: <span className="fw-bold text-warning">30% off</span></li>
                  <li className="mb-2">2 days before expiry: <span className="fw-bold text-warning">50% off</span></li>
                  <li>1 day before expiry: <span className="fw-bold text-danger">70% off</span></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-5">
          {expiringProducts.map(product => (
            <Col key={product.id} md={6} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 text-center">
                <FaBell className="fs-1 text-warning mb-3" />
                <h4>Get Notified About Expiring Products</h4>
                <p className="mb-4">
                  Receive alerts when your favorite products are about to expire and get discounted.
                </p>
                
                {isSubscribed ? (
                  <div className="alert alert-success">
                    You're subscribed! We'll notify you about great deals on expiring products.
                  </div>
                ) : (
                  <Form onSubmit={handleSubscribe}>
                    <Row className="justify-content-center">
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Control 
                            type="email" 
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Button 
                          variant="walmart" 
                          type="submit"
                          className="w-100"
                        >
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiscountSection;