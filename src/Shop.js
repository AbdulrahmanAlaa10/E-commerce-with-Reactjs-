import React from 'react'
import Product from './Product'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import Footer from './Footer';



const Shop = ({ products , onAddToCart }) => {
  return (
    <div>
    <div className="divteam">
      <div>
        <h3>Shop</h3>
        <Link to="/" >Home </Link><span> / Shop</span>
      </div>
    </div>
    <Container className="SHOPALLL">
      <Row>
        {products.map((product) => (
          <Col md="3" sm="12" key={product.id}>
            <Product product={product} onAddToCart={onAddToCart}  />
          </Col>
        ))}
      </Row>
    </Container>


    
    <Footer />
  </div>
  )
}

export default Shop