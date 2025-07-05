import React from 'react';
import Hero from '../components/Hero';
import DiscountSection from '../components/DiscountSection';
import BottleReturn from '../components/BottleReturn';
import GameElements from '../components/GameElements';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLeaf, FaRecycle, FaChartLine, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2>How It Works</h2>
              <p className="lead">Join our eco-conscious shopping revolution</p>
            </Col>
          </Row>
          
          <Row>
            <Col md={3} className="mb-4">
              <Card className="border-0 text-center h-100">
                <Card.Body>
                  <div className="circle-icon bg-light p-3 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaShoppingCart className="text-success fs-2" />
                  </div>
                  <h4>Shop Smart</h4>
                  <p>Purchase expiring products at discounted rates and reduce food waste.</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-4">
              <Card className="border-0 text-center h-100">
                <Card.Body>
                  <div className="circle-icon bg-light p-3 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaLeaf className="text-success fs-2" />
                  </div>
                  <h4>Choose Sustainable</h4>
                  <p>Opt for glass-bottled beverages that can be returned and reused.</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-4">
              <Card className="border-0 text-center h-100">
                <Card.Body>
                  <div className="circle-icon bg-light p-3 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaRecycle className="text-success fs-2" />
                  </div>
                  <h4>Return & Earn</h4>
                  <p>Return glass bottles to receive your deposit back and help the environment.</p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={3} className="mb-4">
              <Card className="border-0 text-center h-100">
                <Card.Body>
                  <div className="circle-icon bg-light p-3 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaChartLine className="text-success fs-2" />
                  </div>
                  <h4>Track Impact</h4>
                  <p>Monitor your environmental footprint and earn rewards for sustainable choices.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-4 text-center">
            <Col>
              <Button variant="eco" size="lg">Start Shopping</Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      <DiscountSection />
      <BottleReturn />
      <GameElements />
    </>
  );
};

export default Home;