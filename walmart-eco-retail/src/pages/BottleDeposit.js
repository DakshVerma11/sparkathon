import React from 'react';
import { Container, Row, Col, Card, Table, Accordion, Button } from 'react-bootstrap';
import BottleReturn from '../components/BottleReturn';
import { FaRecycle, FaInfoCircle, FaMapMarkerAlt, FaMedal, FaQuestion } from 'react-icons/fa';

const BottleDeposit = () => {
  return (
    <>
      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="mb-3">Glass Bottle Deposit Program</h1>
              <p className="lead mb-4">
                Join our mission to reduce single-use plastic waste by choosing beverages in returnable glass bottles.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-white p-3 rounded-circle me-3">
                  <FaRecycle className="text-success fs-3" />
                </div>
                <div>
                  <h5 className="mb-1">How it works:</h5>
                  <p className="mb-0">Buy, Enjoy, Return, Get Refunded</p>
                </div>
              </div>
              <Button variant="eco" className="me-2">Find Bottle Return Locations</Button>
              <Button variant="outline-dark">Learn More</Button>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <img 
                src="https://via.placeholder.com/600x400?text=Glass+Bottle+Return" 
                alt="Glass Bottle Return" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>
        </Container>
      </div>
      
      <BottleReturn />
      
      <section className="py-5">
        <Container>
          <h2 className="section-title mb-4">Eligible Products</h2>
          <p className="lead mb-5">
            These products come in returnable glass bottles with a ₹50 deposit.
          </p>
          
          <Row>
            <Col lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/400x300?text=Water" />
                <Card.Body>
                  <Card.Title>Mineral Water</Card.Title>
                  <Card.Text>
                    Premium mineral water in returnable glass bottles. Available in 500ml and 1L sizes.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹70.00</span>
                      <small className="d-block text-muted">Includes ₹50 deposit</small>
                    </div>
                    <Button variant="walmart" size="sm">Shop Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/400x300?text=Juices" />
                <Card.Body>
                  <Card.Title>Fresh Juices</Card.Title>
                  <Card.Text>
                    Cold-pressed juices in a variety of flavors, packaged in returnable glass bottles.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹120.00</span>
                      <small className="d-block text-muted">Includes ₹50 deposit</small>
                    </div>
                    <Button variant="walmart" size="sm">Shop Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/400x300?text=Milk" />
                <Card.Body>
                  <Card.Title>Organic Milk</Card.Title>
                  <Card.Text>
                    Farm-fresh organic milk in traditional glass bottles, just like the old days.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹90.00</span>
                      <small className="d-block text-muted">Includes ₹50 deposit</small>
                    </div>
                    <Button variant="walmart" size="sm">Shop Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <div className="text-center mt-3">
            <Button variant="outline-secondary">View All Eligible Products</Button>
          </div>
        </Container>
      </section>
      
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h3 className="mb-4">Bottle Return Statistics</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product Category</th>
                    <th>Bottles Sold</th>
                    <th>Return Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Water</td>
                    <td>5,482</td>
                    <td>78%</td>
                  </tr>
                  <tr>
                    <td>Juices</td>
                    <td>3,291</td>
                    <td>62%</td>
                  </tr>
                  <tr>
                    <td>Milk</td>
                    <td>2,718</td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Soft Drinks</td>
                    <td>4,109</td>
                    <td>45%</td>
                  </tr>
                  <tr className="table-success">
                    <td><strong>Total</strong></td>
                    <td><strong>15,600</strong></td>
                    <td><strong>67%</strong></td>
                  </tr>
                </tbody>
              </Table>
              <p className="small text-muted">Last updated: July 5, 2025</p>
            </Col>
            
            <Col lg={6}>
              <h3 className="mb-4">Frequently Asked Questions</h3>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaQuestion className="me-2 text-muted" /> How does the bottle deposit system work?
                  </Accordion.Header>
                  <Accordion.Body>
                    When you purchase a product in a glass bottle, you pay a ₹50 deposit per bottle. 
                    After consuming the product, return the empty bottle to any Walmart store or 
                    return kiosk to receive your ₹50 deposit back. The bottles are then cleaned, 
                    sanitized, and reused, reducing waste and environmental impact.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaQuestion className="me-2 text-muted" /> Do I need a receipt to return bottles?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, you don't need your original receipt to return bottles. Our bottles have unique 
                    NFC tags that verify they are part of our program. Simply bring your empty bottles 
                    to any return location and scan them at the kiosk.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaQuestion className="me-2 text-muted" /> What happens to the returned bottles?
                  </Accordion.Header>
                  <Accordion.Body>
                    Returned bottles go through a thorough cleaning and sanitization process at our 
                    partner facility. Each bottle can be reused up to 30 times before being recycled. 
                    This process saves energy, reduces CO₂ emissions, and minimizes waste compared to 
                    producing new bottles or recycling one-time-use containers.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaQuestion className="me-2 text-muted" /> Can I return bottles from other stores?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our system only accepts bottles from Walmart's Eco-Conscious Platform. These bottles 
                    have our specific NFC tags and design. However, we're working with other retailers to 
                    expand the program and create a unified return system in the future.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Bottle Return Locations</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaMapMarkerAlt className="text-danger fs-1 mb-3" />
                  <h4>In-Store Kiosks</h4>
                  <p>
                    Return your bottles at automated kiosks located at the entrance 
                    of all Walmart stores. Available during store hours.
                  </p>
                  <Button variant="outline-primary">Find Nearest Store</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaInfoCircle className="text-primary fs-1 mb-3" />
                  <h4>Community Centers</h4>
                  <p>
                    We've partnered with local community centers to offer bottle 
                    return services. Check our app for locations and hours.
                  </p>
                  <Button variant="outline-primary">View on App</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaMedal className="text-warning fs-1 mb-3" />
                  <h4>Collection Events</h4>
                  <p>
                    Participate in our monthly collection drives where you can 
                    return bottles and earn bonus eco-points.
                  </p>
                  <Button variant="outline-primary">Upcoming Events</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BottleDeposit;