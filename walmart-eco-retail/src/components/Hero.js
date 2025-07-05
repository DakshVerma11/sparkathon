import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRecycle, FaLeaf } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4 fw-bold mb-4">Retail with Purpose</h1>
            <h2 className="h3 mb-4">Shop sustainably. Save the planet. Save money.</h2>
            <p className="lead mb-5">
              Join our eco-conscious platform where expiring food gets discounted,
              glass bottles get returned, and your environmental impact is transparent.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="eco" size="lg" className="px-4">
                <FaRecycle className="me-2" /> Explore Products
              </Button>
              <Button variant="outline-light" size="lg" className="px-4">
                <FaLeaf className="me-2" /> Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;