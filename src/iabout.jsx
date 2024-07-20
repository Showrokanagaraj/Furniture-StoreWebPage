// About.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eee',backgroundSize: 'cover', 
    backgroundImage:'url(https://wallpapers.com/images/hd/armchair-furniture-on-spacey-living-room-23mx8kxyn2yo3a9v.jpg)', }}>

<section>
  <video
    controls // Adds playback controls
    autoPlay // Automatically starts playing the video
    loop 
    style={{
      width: '100%', // Make the video fill the entire width of its container
      height: 'auto', // Automatically adjust the height to maintain aspect ratio
    }}
  >
    <source src="https://media.istockphoto.com/id/1334867103/video/interior-empty-modern-loft-office-open-space-modern-office-footage-modern-open-concept-lobby.mp4?s=mp4-640x640-is&k=20&c=bv3M63FVHi1FDSCzKW0ew9HeLprcMp-1NdKArPJ3zcE=" type="video/mp4" />
    {/* Add additional source tags for different video formats if necessary */}
    Your browser does not support the video tag.
  </video>
</section>


      {/* Our Story */}
      <section>
        <h3>Our Story</h3>
        <p>
          Established in [Year], our journey began with a passion for creating beautiful and functional furniture. Over the years, we have evolved into a trusted name in the furniture industry, known for our commitment to quality and customer satisfaction.
        </p>
      </section>

      {/* Our Commitment */}
      <section>
        <h3>Our Commitment</h3>
        <p>
          At [Your Furniture Store Name], we are committed to providing furniture that not only meets your aesthetic preferences but also stands the test of time in terms of durability and craftsmanship. Explore our collection and discover the perfect pieces for your home.
        </p>
      </section>

      {/* Home Button */}
      <NavLink
        to="/Home"
        style={{
          textDecoration: 'none',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          backgroundColor: 'black',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Home
      </NavLink>
    </div>
  );
};

export default About;
