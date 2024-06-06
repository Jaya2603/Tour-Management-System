import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Up-to-date weather forecasts for your destinations and ensures you’re always prepared for the elements.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Have access to the best tour guides to make your experience unforgettable.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor every aspect of your journey to suit your specific needs and interests.",
  },
];
const ServiceList = () => {
  return (
    <>
      {ServicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
