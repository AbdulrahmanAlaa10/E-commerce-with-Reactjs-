import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
function Footer() {
  return (
    <footer>
    <Container>
        <Row >
            <Col lg="2" md="2" sm="12">
                <h3>Company</h3>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Store Locations</p>
                    <p>Careers</p>


            </Col>
            <Col lg="2" md="2" sm="12">
                <h3>Help</h3>
                    <p>Order Tracking</p>
                    <p>FAQ's</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>


            </Col>
            <Col lg="3" md="3" sm="12">
                <h3>Follow Us</h3>
                <p>And get Free Shipping on all your orders!</p>
                <div className="divicons">
                    <div><FaFacebookF /></div>
                    <div><AiOutlineTwitter /></div>
                    <div><GrPinterest /></div>

                </div>

            </Col>
            <Col lg="5" md="5" sm="12">
                <h3>Sign up now & get 10% off</h3>
                <p>Be the first to know about our new arrivals and exclusive offers.</p>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <input type="submit" placeholder="Subscribe" />
                </form>

            </Col>

        </Row>
    </Container>
</footer>
  )
}

export default Footer