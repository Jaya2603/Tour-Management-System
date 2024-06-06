import React from "react";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>
              Stay updated with the latest travel tips, destination guides, and exclusive offers. 
        Our newsletter is designed to help you make the most of your travels, whether you're a seasoned explorer or just starting your adventure. 
        Don't miss out on expert advice and insider knowledge that will enhance your travel experiences. 
        Sign up today and start your journey with Explore Travel!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
