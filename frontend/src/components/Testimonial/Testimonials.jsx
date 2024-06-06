import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
import ava05 from "../../assets/images/ava-5.jpg";
import ava07 from "../../assets/images/ava-7.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    resposive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Explore Travel made our family vacation to Europe unforgettable! 
        The weather calculation tool was incredibly helpful in planning our daily activities, 
        and the personalized itinerary they created for us was spot on. We felt like VIPs
        every step of the way. Highly recommend!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Shivangi</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I recently used Explore Travel for a solo trip to Southeast Asia, 
        and I couldn't be happier with the service. The tour guides were 
        knowledgeable and friendly, making my experience truly immersive. 
        Plus, the customization options allowed me to tailor the trip exactly to my liking. 
        I'll definitely be using Explore Travel for my next adventure!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Samrat</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        The best part about Explore Travel was the seamless experience from booking to the actual trip. 
        The accurate weather updates saved us from unexpected surprises, and the guides were exceptional. 
        The attention to detail and personalized touches made our honeymoon absolutely perfect. 
        Thank you, Explore Travel!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3"> Trisha</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Explore Travel exceeded my expectations. The customization feature allowed me to create 
        a unique itinerary for my business trip, combining work and leisure perfectly. 
        The weather calculation tool was a great bonus, ensuring I was always prepared. 
        Exceptional service and support throughout. Highly recommended!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Avirbhav</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Our trip to Udaipur was incredible, thanks to Explore Travel. 
        The user-friendly platform made planning a breeze, and the 24/7 customer 
        support was always there when we needed it. The local guides provided 
        amazing insights, and the customized itinerary fit our adventurous spirit perfectly. 
        Can't wait to book our next trip with Explore Travel!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Deepika</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          corrupti possimus illum nesciunt minima ea eveniet atque dolor. Nisi
          soluta quis voluptatem velit excepturi iure a dolorum totam quasi
          saepe.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava07} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Ruchita</h6>
            <p> Customer </p>
          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Testimonials;
