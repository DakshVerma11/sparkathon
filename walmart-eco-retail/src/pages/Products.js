import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [sortBy, setSortBy] = useState('relevance');
  const [filterExpiring, setFilterExpiring] = useState(false);
  const [filterEco, setFilterEco] = useState(false);
  const [filterDeposit, setFilterDeposit] = useState(false);
  
  // Sample products data
  const allProducts = [
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
    },
    {
      id: 5,
      name: "Mineral Water (Glass Bottle)",
      description: "Premium spring water in returnable glass bottle.",
      price: 70.00,
      daysUntilExpiry: 365,
      image: "https://via.placeholder.com/300x200?text=Water",
      isEcoFriendly: true,
      bottleDeposit: 50,
      carbonFootprint: 0.1
    },
    {
      id: 6,
      name: "Cold Pressed Juice (Glass)",
      description: "Organic orange and carrot juice, no added sugar.",
      price: 120.00,
      daysUntilExpiry: 5,
      image: "https://via.placeholder.com/300x200?text=Juice",
      isEcoFriendly: true,
      bottleDeposit: 50,
      carbonFootprint: 0.2
    },
    {
      id: 7,
      name: "Milk (Glass Bottle)",
      description: "Organic whole milk in returnable glass bottle.",
      price: 90.00,
      daysUntilExpiry: 7,
      image: "https://via.placeholder.com/300x200?text=Milk",
      isEcoFriendly: true,
      bottleDeposit: 50,
      carbonFootprint: 0.3
    },
    {
      id: 8,
      name: "Fresh Strawberries",
      description: "Sweet, juicy strawberries from local farms.",
      price: 199.99,
      daysUntilExpiry: 4,
      image: "https://via.placeholder.com/300x200?text=Strawberries",
      isEcoFriendly: true,
      carbonFootprint: 0.15
    },
    {
      id: 9,
      name: "Craft Beer (Glass Bottle)",
      description: "Local IPA in returnable glass bottle.",
      price: 150.00,
      daysUntilExpiry: 90,
      image: "https://via.placeholder.com/300x200?text=Beer",
      isEcoFriendly: true,
      bottleDeposit: 50,
      carbonFootprint: 0.35
    },
    {
      id: 10,
      name: "Organic Bananas",
      description: "Fair trade, organic bananas.",
      price: 70.00,
      daysUntilExpiry: 6,
      image: "https://via.placeholder.com/300x200?text=Bananas",
      isEcoFriendly: true,
      carbonFootprint: 0.12
    },
    {
      id: 11,
      name: "Cereal",
      description: "Whole grain breakfast cereal.",
      price: 250.00,
      daysUntilExpiry: 180,
      image: "https://via.placeholder.com/300x200?text=Cereal",
      isEcoFriendly: false,
      carbonFootprint: 0.5
    },
    {
      id: 12,
      name: "Potato Chips",
      description: "Crispy, salted potato chips.",
      price: 99.99,
      daysUntilExpiry: 60,
      image: "https://via.placeholder.com/300x200?text=Chips",
      isEcoFriendly: false,
      carbonFootprint: 0.6
    }
  ];
  
  // Filter products based on user selections
  const filteredProducts = allProducts.filter(product => {
    if (filterExpiring && product.daysUntilExpiry > 7) return false;
    if (filterEco && !product.isEcoFriendly) return false;
    if (filterDeposit && !product.bottleDeposit) return false;
    return true;
  });
  
  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'expiry':
        return a.daysUntilExpiry - b.daysUntilExpiry;
      case 'eco-impact':
        return a.carbonFootprint - b.carbonFootprint;
      default:
        return 0;
    }
  });

  return (
    <Container className="py-5">
      <h1 className="mb-4">Shop Products</h1>
      
      <Row className="mb-4">
        <Col lg={3} className="mb-3">
          <div className="p-3 bg-light rounded">
            <h5 className="mb-3">Filters</h5>
            <Form>
              <Form.Check 
                type="checkbox"
                id="filter-expiring"
                label="Expiring Soon (Discounted)"
                checked={filterExpiring}
                onChange={() => setFilterExpiring(!filterExpiring)}
                className="mb-2"
              />
              <Form.Check 
                type="checkbox"
                id="filter-eco"
                label="Eco-Friendly Products"
                checked={filterEco}
                onChange={() => setFilterEco(!filterEco)}
                className="mb-2"
              />
              <Form.Check 
                type="checkbox"
                id="filter-deposit"
                label="Bottle Deposit Items"
                checked={filterDeposit}
                onChange={() => setFilterDeposit(!filterDeposit)}
                className="mb-2"
              />
              
              <hr className="my-3" />
              
              <h6>Categories</h6>
              <Form.Check 
                type="checkbox"
                id="category-grocery"
                label="Groceries"
                defaultChecked
                className="mb-2"
              />
              <Form.Check 
                type="checkbox"
                id="category-dairy"
                label="Dairy & Eggs"
                defaultChecked
                className="mb-2"
              />
              <Form.Check 
                type="checkbox"
                id="category-produce"
                label="Fresh Produce"
                defaultChecked
                className="mb-2"
              />
              <Form.Check 
                type="checkbox"
                id="category-beverages"
                label="Beverages"
                defaultChecked
                className="mb-2"
              />
              
              <hr className="my-3" />
              
              <h6>Price Range</h6>
              <Form.Range className="mb-2" />
              <div className="d-flex justify-content-between">
                <small>₹0</small>
                <small>₹500</small>
              </div>
              
              <div className="mt-3">
                <Button variant="eco" size="sm" className="w-100">Apply Filters</Button>
              </div>
            </Form>
          </div>
        </Col>
        
        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">Showing {sortedProducts.length} products</p>
            <div className="d-flex">
              <DropdownButton 
                id="sort-dropdown"
                title={`Sort by: ${sortBy.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
                variant="outline-secondary"
                onSelect={(e) => setSortBy(e)}
              >
                <Dropdown.Item eventKey="relevance">Relevance</Dropdown.Item>
                <Dropdown.Item eventKey="price-low">Price: Low to High</Dropdown.Item>
                <Dropdown.Item eventKey="price-high">Price: High to Low</Dropdown.Item>
                <Dropdown.Item eventKey="expiry">Expiry Date</Dropdown.Item>
                <Dropdown.Item eventKey="eco-impact">Eco Impact</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          
          <Row>
            {sortedProducts.map(product => (
              <Col key={product.id} md={6} lg={4} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
            
            {sortedProducts.length === 0 && (
              <Col xs={12} className="text-center py-5">
                <h4>No products match your filters</h4>
                <p>Try adjusting your filter criteria</p>
                <Button 
                  variant="outline-secondary"
                  onClick={() => {
                    setFilterExpiring(false);
                    setFilterEco(false);
                    setFilterDeposit(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;