import React from "react";
import "./About.css";
import Image1 from "../../../assets/about-img-1.png";
import Image2 from "../../../assets/about-img-2.png";
import Image3 from "../../../assets/about-img-3.png";
import Image4 from "../../../assets/about-img-4.png";

const About = () => {
  return (
    <div id='about' className='about' data-testid='about'>
      <div className='container'>
        <div>
          <h2 className='about-title'>Little Lemon</h2>
          <h3 className='about-subtitle'>Manila</h3>
          <p className='about-description'>
            Flavored in the heart of Manila, Philippines, experience the rich
            and tasty dishes that were passed down through generations of
            hardwork and dedication. Our food will not only satisfy your
            cravings, but will also provide you with a great memory for us to
            remember.
          </p>
          <p className='about-description'>
            What we do in Little Lemon: Manila is to showcase our ancestral
            dishes. All of our recipes are handed through 5 generations of chefs
            and cooks. That's why we value our dishes, because our customers
            deserves it.
          </p>
        </div>
        <div className='about-images'>
          <img
            className='about-image'
            src={Image1}
            alt='Little Lemon Restaurant'
          />
          <img
            className='about-image'
            src={Image2}
            alt='Little Lemon Restaurant'
          />
          <img
            className='about-image'
            src={Image3}
            alt='Little Lemon Restaurant'
          />
          <img
            className='about-image'
            src={Image4}
            alt='Little Lemon Restaurant'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
