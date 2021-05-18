import React from 'react';
import Commom from './Commom';
import web from './images/img2.svg'; // gives image path

const Home = () =>{
  return(
    <>
        <Commom  name='Grow Your Business with' imgsrc={web} visit="Service" btname="Get Started"/>

    </>
  );
}
export default Home;