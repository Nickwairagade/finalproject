import React from 'react';
import Commom from './Commom';
import web from './images/img3.svg'; // gives image path

const About = () =>{
  return(
    <>
      <Commom  name='Welcome to About Page' imgsrc={web} visit="contact" btname="Contact Now"/>
    </>
  );
}
export default About;