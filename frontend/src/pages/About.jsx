import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Bootstrap for styling
import Subtitle from "../shared/Subtitle"; // Assuming Subtitle is a reusable component
import ServiceList from '../services/ServiceList'; // Update the path to ServiceList component
import experienceImg from "../assets/images/experience.jpg"; // Assuming you have an image for the experience section

const About = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ========= experience section start =================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  {" "}
                  Take only memories,  <br />leave only footprints{" "}
                </h2>
                <p>
                  {" "}
                  At Explore Travel, we are dedicated to making these experiences accessible and enjoyable for everyone. 
                  <br />
                  Whether you're planning a business trip, a family vacation, or a solo adventure, our platform provides all the tools you need<br/> to make your journey memorable. With real-time updates, customizable itineraries, and 24/7 support, we ensure that every aspect of your travel is covered. 
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span> 12k+</span>
                  <h6> Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span> 2k+</span>
                  <h6> Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span> 15</span>
                  <h6> Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= experience section end =================== */}
    </div>
  );
};

export default About;
