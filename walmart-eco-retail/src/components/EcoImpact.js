import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { FaLeaf, FaWater, FaTrash, FaClock } from 'react-icons/fa';

const EcoImpact = () => {
  // Sample data for charts
  const bottleData = [
    { name: 'Returned', value: 37, color: '#2ecc71' },
    { name: 'Not Returned', value: 63, color: '#e74c3c' },
  ];

  const impactData = [
    { name: 'CO₂ Saved', value: 42, unit: 'kg' },
    { name: 'Plastic Avoided', value: 15, unit: 'kg' },
    { name: 'Water Saved', value: 230, unit: 'L' },
    { name: 'Energy Saved', value: 68, unit: 'kWh' },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="section-title">Your Environmental Impact</h2>
        <p className="lead mb-5">
          Track how your shopping choices are making a difference for our planet.
        </p>
        
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="impact-card h-100">
              <Card.Body>
                <h4 className="mb-4">Bottle Return Rate</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={bottleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {bottleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center mt-3">
                  You've returned 37% of purchased bottles. Return more to increase your impact!
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="impact-card h-100">
              <Card.Body>
                <h4 className="mb-4">Environmental Savings</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={impactData}
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
                    <Tooltip formatter={(value, name, props) => [`${value} ${props.payload.unit}`, name]} />
                    <Legend />
                    <Bar dataKey="value" fill="#2ecc71" />
                  </BarChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md={3} className="mb-4">
            <Card className="impact-card text-center">
              <Card.Body>
                <div className="impact-icon mb-3">
                  <FaLeaf className="text-success fs-1" />
                </div>
                <h5>Reduced Carbon</h5>
                <h3 className="text-success">42 kg</h3>
                <p className="text-muted small">CO₂ emissions saved</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="impact-card text-center">
              <Card.Body>
                <div className="impact-icon mb-3">
                  <FaWater className="text-primary fs-1" />
                </div>
                <h5>Water Savings</h5>
                <h3 className="text-primary">230 L</h3>
                <p className="text-muted small">Fresh water preserved</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="impact-card text-center">
              <Card.Body>
                <div className="impact-icon mb-3">
                  <FaTrash className="text-warning fs-1" />
                </div>
                <h5>Waste Reduction</h5>
                <h3 className="text-warning">15 kg</h3>
                <p className="text-muted small">Waste diverted from landfills</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} className="mb-4">
            <Card className="impact-card text-center">
              <Card.Body>
                <div className="impact-icon mb-3">
                  <FaClock className="text-danger fs-1" />
                </div>
                <h5>Saved Food</h5>
                <h3 className="text-danger">12 items</h3>
                <p className="text-muted small">Near-expiry purchases</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EcoImpact;