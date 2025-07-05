import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Table } from 'react-bootstrap';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LineChart, Line } from 'recharts';
import { FaLeaf, FaRecycle, FaTrophy, FaHistory, FaUser, FaCalendarAlt } from 'react-icons/fa';
import EcoImpact from '../components/EcoImpact';

// Sample data for user's environmental impact over time
const monthlyImpactData = [
  { name: 'Jan', bottles: 12, waste: 3.2, carbon: 5.8 },
  { name: 'Feb', bottles: 19, waste: 4.1, carbon: 8.2 },
  { name: 'Mar', bottles: 15, waste: 3.8, carbon: 6.9 },
  { name: 'Apr', bottles: 21, waste: 5.3, carbon: 9.7 },
  { name: 'May', bottles: 25, waste: 6.1, carbon: 11.5 },
  { name: 'Jun', bottles: 30, waste: 7.4, carbon: 13.8 },
  { name: 'Jul', bottles: 18, waste: 4.5, carbon: 8.3 },
];

// Sample data for user's eco activity history
const activityHistory = [
  { id: 1, date: '2025-07-03', activity: 'Returned 5 glass bottles', points: 100, impact: 'Saved 1.5kg CO₂' },
  { id: 2, date: '2025-07-02', activity: 'Purchased expiring yogurt (50% off)', points: 30, impact: 'Prevented food waste' },
  { id: 3, date: '2025-06-30', activity: 'Chose green delivery option', points: 50, impact: 'Reduced transportation emissions' },
  { id: 4, date: '2025-06-28', activity: 'Purchased water in glass bottle', points: 20, impact: 'Avoided plastic waste' },
  { id: 5, date: '2025-06-25', activity: 'Returned 3 glass bottles', points: 60, impact: 'Saved 0.9kg CO₂' },
];

const Impact = () => {
  // Get current date from props
  const currentDate = new Date('2025-07-05 06:22:55');
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // User info
  const username = 'DakshVerma11';
  const userLevel = 'Eco Warrior';
  const totalPoints = 1285;
  const totalBottlesReturned = 47;
  const totalWasteSaved = 12.5; // in kg
  const totalCarbonSaved = 21.4; // in kg CO₂

  return (
    <>
      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="mb-3">Your Environmental Impact</h1>
              <p className="lead mb-4">
                Track how your sustainable shopping choices are making a difference for our planet.
              </p>
              <div className="d-flex align-items-center mb-2">
                <FaUser className="text-primary me-2" />
                <span className="fw-bold">{username}</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaCalendarAlt className="text-muted me-2" />
                <span>Last updated: {formattedDate}</span>
              </div>
              <Button variant="eco" className="me-2">Download Impact Report</Button>
              <Button variant="outline-dark">Share My Impact</Button>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Your Eco Level</h4>
                    <div className="eco-badge px-3 py-2">{userLevel}</div>
                  </div>
                  <ProgressBar className="progress-eco mb-3" style={{height: '10px'}}>
                    <ProgressBar variant="success" now={65} />
                  </ProgressBar>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>0</span>
                    <span>1000</span>
                    <span>2000</span>
                    <span>3000</span>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <div className="text-center mx-3">
                      <h2 className="text-success mb-0">{totalPoints}</h2>
                      <small className="text-muted">Total Points</small>
                    </div>
                    <div className="text-center mx-3">
                      <h2 className="text-primary mb-0">{totalBottlesReturned}</h2>
                      <small className="text-muted">Bottles Returned</small>
                    </div>
                    <div className="text-center mx-3">
                      <h2 className="text-warning mb-0">{totalCarbonSaved}kg</h2>
                      <small className="text-muted">CO₂ Saved</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      
      <EcoImpact />
      
      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-title mb-5">Your Impact Over Time</h2>
          <Row>
            <Col lg={8} className="mb-4">
              <Card className="border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Monthly Progress</h4>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart
                      data={monthlyImpactData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bottles" stroke="#004c91" name="Bottles Returned" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="waste" stroke="#e74c3c" name="Waste Saved (kg)" />
                      <Line type="monotone" dataKey="carbon" stroke="#2ecc71" name="CO₂ Reduced (kg)" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} className="mb-4">
              <Card className="border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Impact Breakdown</h4>
                  <div className="text-center mb-4">
                    <div className="circle-icon bg-light p-3 rounded-circle mb-3 mx-auto" style={{width: '100px', height: '100px'}}>
                      <FaRecycle className="text-success fs-1" />
                    </div>
                    <h5>You're in the top 15% of eco-conscious shoppers!</h5>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Bottle Returns</span>
                      <span className="text-success">Excellent</span>
                    </div>
                    <ProgressBar className="progress-eco">
                      <ProgressBar variant="success" now={85} />
                    </ProgressBar>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Food Waste Prevention</span>
                      <span className="text-warning">Good</span>
                    </div>
                    <ProgressBar className="progress-eco">
                      <ProgressBar variant="warning" now={65} />
                    </ProgressBar>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span>Eco-Friendly Products</span>
                      <span className="text-danger">Needs Improvement</span>
                    </div>
                    <ProgressBar className="progress-eco">
                      <ProgressBar variant="danger" now={35} />
                    </ProgressBar>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline-success" size="sm" className="w-100">Get Personalized Tips</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <h2 className="section-title mb-5">Your Eco Activity History</h2>
          <Row>
            <Col lg={12}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <div className="table-responsive">
                    <Table hover className="mb-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Activity</th>
                          <th>Points Earned</th>
                          <th>Environmental Impact</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {activityHistory.map(activity => (
                          <tr key={activity.id}>
                            <td>{new Date(activity.date).toLocaleDateString()}</td>
                            <td>{activity.activity}</td>
                            <td>
                              <span className="badge bg-success">+{activity.points}</span>
                            </td>
                            <td>{activity.impact}</td>
                            <td>
                              <Button variant="link" size="sm" className="text-muted p-0">
                                <FaHistory /> Details
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Button variant="outline-secondary" size="sm">
                      View All Activity
                    </Button>
                    <div>
                      <Button variant="outline-primary" size="sm" className="me-2">
                        Download CSV
                      </Button>
                      <Button variant="outline-success" size="sm">
                        Share Progress
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col className="text-center">
              <h3 className="mb-4">Next Steps to Increase Your Impact</h3>
              <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                  <Card className="border-0 shadow h-100">
                    <Card.Body className="p-4 text-center">
                      <div className="circle-icon bg-light p-3 rounded-circle mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                        <FaLeaf className="text-success fs-2" />
                      </div>
                      <h5>Try Eco-Friendly Products</h5>
                      <p>Switch to products with sustainable packaging to earn more points.</p>
                      <Button variant="outline-success" size="sm">Explore Products</Button>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="border-0 shadow h-100">
                    <Card.Body className="p-4 text-center">
                      <div className="circle-icon bg-light p-3 rounded-circle mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                        <FaRecycle className="text-primary fs-2" />
                      </div>
                      <h5>Return More Bottles</h5>
                      <p>Increase your bottle return rate to 85% to earn the "Bottle Master" badge.</p>
                      <Button variant="outline-primary" size="sm">Find Return Locations</Button>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={4} className="mb-4">
                  <Card className="border-0 shadow h-100">
                    <Card.Body className="p-4 text-center">
                      <div className="circle-icon bg-light p-3 rounded-circle mb-3 mx-auto" style={{width: '80px', height: '80px'}}>
                        <FaTrophy className="text-warning fs-2" />
                      </div>
                      <h5>Join Community Challenges</h5>
                      <p>Participate in our monthly eco challenges to earn bonus points and rewards.</p>
                      <Button variant="outline-warning" size="sm">View Challenges</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Impact;