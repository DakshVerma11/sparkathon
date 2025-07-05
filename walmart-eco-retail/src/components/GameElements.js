import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';
import { FaTrophy, FaRecycle, FaLeaf, FaWater, FaSeedling } from 'react-icons/fa';

const GameElements = () => {
  const badges = [
    { 
      id: 1, 
      name: 'Waste Warrior', 
      icon: <FaRecycle />, 
      description: 'Saved 50 meals from being wasted', 
      unlocked: true 
    },
    { 
      id: 2, 
      name: 'Bottle Champion', 
      icon: <FaWater />, 
      description: 'Returned 100 glass bottles', 
      unlocked: true 
    },
    { 
      id: 3, 
      name: 'Carbon Cutter', 
      icon: <FaLeaf />, 
      description: 'Reduced carbon footprint by 200kg', 
      unlocked: false,
      progress: 65
    },
    { 
      id: 4, 
      name: 'Eco Pioneer', 
      icon: <FaSeedling />, 
      description: 'First to try 10 new eco products', 
      unlocked: false,
      progress: 40
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-3">Your Eco Achievements</h2>
          <p className="lead">
            Track your environmental impact and earn badges for sustainable shopping.
          </p>
        </div>
        
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FaTrophy className="text-warning fs-3 me-3" />
                  <h4 className="mb-0">Your Eco Level: Tree Hugger</h4>
                </div>
                <ProgressBar className="progress-eco mb-3">
                  <ProgressBar variant="success" now={65} />
                </ProgressBar>
                <p className="text-center">145 points to next level: "Earth Guardian"</p>
                
                <hr className="my-4" />
                
                <h5 className="mb-3">Recent Achievements</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Returned 5 glass bottles
                    <Badge bg="success">+100 pts</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Purchased 3 near-expiry items
                    <Badge bg="success">+75 pts</Badge>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Chose green delivery option
                    <Badge bg="success">+50 pts</Badge>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Your Eco Badges</h4>
                <Row>
                  {badges.map(badge => (
                    <Col md={6} key={badge.id} className="mb-4">
                      <div className="text-center">
                        <div className={`game-badge mx-auto ${badge.unlocked ? 'bg-success' : 'bg-light'}`}>
                          <div className={`fs-3 ${badge.unlocked ? 'text-white' : 'text-muted'}`}>
                            {badge.icon}
                          </div>
                        </div>
                        <h5 className="mb-1">{badge.name}</h5>
                        <p className="small text-muted mb-2">{badge.description}</p>
                        
                        {badge.unlocked ? (
                          <Badge bg="success">Unlocked</Badge>
                        ) : (
                          <>
                            <ProgressBar className="progress-eco mb-2" now={badge.progress} />
                            <small className="text-muted">{badge.progress}% complete</small>
                          </>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <div className="text-center">
          <h5 className="mb-3">Community Challenge</h5>
          <p>Help Walmart reach the goal of 10,000 returned bottles this month!</p>
          <ProgressBar className="progress-eco mb-3" style={{height: '20px'}}>
            <ProgressBar variant="success" now={73} label="7,308 bottles" />
          </ProgressBar>
          <p className="small text-muted">When reached, Walmart will donate ₹50,000 to local environmental initiatives</p>
        </div>
      </Container>
    </section>
  );
};

export default GameElements;