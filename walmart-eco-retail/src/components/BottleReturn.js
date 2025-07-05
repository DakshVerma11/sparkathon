import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ProgressBar } from 'react-bootstrap';
import { FaRecycle, FaArrowRight, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';

const BottleReturn = () => {
  const [bottleCount, setBottleCount] = useState(0);
  const [refundAmount, setRefundAmount] = useState(0);
  const [ecoPoints, setEcoPoints] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleReturn = () => {
    if (bottleCount > 0) {
      setIsProcessing(true);
      
      // Simulate processing delay
      setTimeout(() => {
        setRefundAmount(bottleCount * 50); // ₹50 per bottle
        setEcoPoints(bottleCount * 20); // 20 points per bottle
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <div className="bottle-return-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="section-title">Glass Bottle Return Program</h2>
            <p className="lead mb-4">
              Return your glass bottles and get refunded ₹50 per bottle. Help us reduce waste and protect the environment.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="me-4 text-center">
                <div className="circle-icon bg-white p-3 rounded-circle mb-2">
                  <FaRecycle className="text-success fs-2" />
                </div>
                <p className="mb-0">Return</p>
              </div>
              <FaArrowRight className="text-muted mx-2" />
              <div className="me-4 text-center">
                <div className="circle-icon bg-white p-3 rounded-circle mb-2">
                  <FaLeaf className="text-success fs-2" />
                </div>
                <p className="mb-0">Earn Points</p>
              </div>
              <FaArrowRight className="text-muted mx-2" />
              <div className="text-center">
                <div className="circle-icon bg-white p-3 rounded-circle mb-2">
                  <FaMoneyBillWave className="text-success fs-2" />
                </div>
                <p className="mb-0">Get Refund</p>
              </div>
            </div>
            <p>
              Each year, we save over 1 million glass bottles from landfills. Join the movement!
            </p>
          </Col>
          <Col lg={6}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <h3 className="mb-4">Return Your Bottles</h3>
                
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>How many bottles are you returning today?</Form.Label>
                    <Form.Control 
                      type="number" 
                      min="0"
                      value={bottleCount}
                      onChange={(e) => setBottleCount(parseInt(e.target.value) || 0)}
                    />
                  </Form.Group>
                  
                  <Button 
                    variant="eco" 
                    className="w-100 mb-3"
                    onClick={handleReturn}
                    disabled={bottleCount === 0 || isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Return Bottles'}
                  </Button>
                </Form>
                
                {refundAmount > 0 && (
                  <div className="mt-4 text-center">
                    <div className="alert alert-success">
                      <h4>Thank You!</h4>
                      <p className="mb-2">Your refund amount: <strong>₹{refundAmount}</strong></p>
                      <p className="mb-0">Eco points earned: <strong>{ecoPoints}</strong></p>
                    </div>
                    <p className="mt-3 mb-2">Environmental Impact:</p>
                    <p className="small text-muted mb-2">CO₂ Saved: {bottleCount * 0.3} kg</p>
                    <ProgressBar className="progress-eco mb-3">
                      <ProgressBar variant="success" now={100} />
                    </ProgressBar>
                    <Button variant="outline-success" size="sm">View Your Impact</Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottleReturn;