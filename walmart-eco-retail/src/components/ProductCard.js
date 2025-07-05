import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaLeaf, FaClock } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // Calculate discount based on days until expiry
  const getDiscountPercent = (daysUntilExpiry) => {
    if (daysUntilExpiry <= 1) return 70;
    if (daysUntilExpiry <= 2) return 50;
    if (daysUntilExpiry <= 3) return 30;
    if (daysUntilExpiry <= 5) return 20;
    if (daysUntilExpiry <= 7) return 10;
    return 0;
  };

  const discount = getDiscountPercent(product.daysUntilExpiry);
  const discountedPrice = product.price - (product.price * discount / 100);

  return (
    <Card className="product-card h-100">
      {discount > 0 && (
        <div className="discount-tag">
          <FaClock className="me-1" /> {discount}% OFF
        </div>
      )}
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title>{product.name}</Card.Title>
          {product.isEcoFriendly && (
            <Badge className="eco-badge">
              <FaLeaf className="me-1" /> Eco
            </Badge>
          )}
        </div>
        <Card.Text>
          {product.description}
        </Card.Text>
        {product.daysUntilExpiry <= 7 && (
          <div className="mb-3">
            <Badge className="expiry-badge">
              Expires in {product.daysUntilExpiry} day{product.daysUntilExpiry !== 1 ? 's' : ''}
            </Badge>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {discount > 0 ? (
              <>
                <span className="text-decoration-line-through me-2">₹{product.price.toFixed(2)}</span>
                <span className="fw-bold text-danger">₹{discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="fw-bold">₹{product.price.toFixed(2)}</span>
            )}
          </div>
          <Button variant="walmart">Add to Cart</Button>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white">
        {product.bottleDeposit ? (
          <small className="text-muted">
            Includes ₹{product.bottleDeposit} bottle deposit (refundable)
          </small>
        ) : (
          <small className="text-muted">
            Carbon Footprint: {product.carbonFootprint} kg CO₂
          </small>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;