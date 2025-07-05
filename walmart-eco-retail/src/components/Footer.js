import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5><FaLeaf className="me-2" /> Walmart Eco-Retail</h5>
            <p>Retail with Purpose: Creating a sustainable future through eco-conscious shopping experiences.</p>
            <div className="social-icons">
              <a href="#" className="me-3"><FaTwitter /></a>
              <a href="#" className="me-3"><FaFacebook /></a>
              <a href="#" className="me-3"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </Col>
          <Col md={2}>
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Groceries</a></li>
              <li><a href="#" className="text-white">Electronics</a></li>
              <li><a href="#" className="text-white">Home & Kitchen</a></li>
              <li><a href="#" className="text-white">Eco Products</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Our Mission</a></li>
              <li><a href="#" className="text-white">Sustainability</a></li>
              <li><a href="#" className="text-white">Eco Initiatives</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Subscribe to our Newsletter</h5>
            <p>Get updates on our latest eco-friendly products and initiatives.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your email address" />
              <button className="btn btn-eco" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="mt-4 mb-4" style={{backgroundColor: 'rgba(255,255,255,0.2)'}} />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 Walmart Eco-Retail. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;