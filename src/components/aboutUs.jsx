import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Menu from './Menu';
import { Carousel } from 'react-responsive-carousel';
import Aos from "aos"


/**
* @author
* @function aboutUs
**/

const AboutUs = (props) => {
  const [intervalz, setIntervalz] = useState(3000); //initial state here represents the interval for first image.
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])
  const onChange = (index, item) => {
    setIntervalz(item.props["data-interval"]);
  };
  const mystyle={
    background: 'linear-gradient(135deg,green, orange 60%, cyan)'
    // backgroundImage: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
  }
  return(
    <>
    <Menu/>
    <div className="forHeight"></div>
    <div>
      <Row>
        <Col sm={12} md={6}>
        
        {/* <Carousel autoPlay={true} interval="3000" transitionTime="1000" showThumbs={false}> */}
        <div data-aos="slide-right" className="carDiv text-center">
          
        <Carousel
         onChange={onChange}
         autoPlay
         interval={intervalz}
         infiniteLoop={true}
         showThumbs={false}
        >
                <div data-interval={3000}>
                <img className="imgStyle" src={process.env.PUBLIC_URL+"/boss1.jpg"} alt=""/>
                   
                </div>
                <div data-interval={3000}>
                <img className="imgStyle" src={process.env.PUBLIC_URL+"/boss2.jpg"} alt=""/>
                  
                </div>
                <div data-interval={3000}>
                <img className="imgStyle" src={process.env.PUBLIC_URL+"/boss3.jpg"} alt=""/>
                  
                </div>
            </Carousel>
            <h5 className="mt-2"><b>Satendra Sahu</b></h5>
            <h6>DIRECTOR</h6>
          
        </div>
        </Col>

        <Col sm={12} md={6}>
        <div style={mystyle} data-aos="slide-left" className="aboutDiv text-white">
          
          <h6>Born and brought up in the small district of Shivpuri, Madhya Pradesh, 
            Mr. Satendra Sahu comes from very humble beginnings. 
            From a very young age, he has always been inclined towards education and helping others and his compassionate and motivating nature aids him to do so.
            </h6>

            <h6>
            Mr. Satendra Sahu completed his schooling from Shivpuri, Madhya Pradesh and 
            Under gratuation 'BSC (CS)' from "Govt Nirbhay Singh Patel Science College, Indore" and
            Post gratuation 'MCA' from "Birla Institute of Technology, Mesra Ranchi jharkhand India".
            Currently He is working as a "Senior Software Developer".
            </h6>

            <h6>In 2021, he lays the foundation of "Sahu's The Classic Education" and have ever since, 
              been transforming the education scene in and around central India. 
              "Sahu's The Classic Education" was established with the vision of providing quality
               education to students and to improove their education level.</h6>
          </div>
        </Col>
      </Row>
    </div>
    </>
   )
  }


export default AboutUs