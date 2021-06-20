import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Menu from './Menu'
import OurBatches from './OurBatches';
import Aos from "aos";

/**
* @author
* @function OurClasses
**/

const OurClasses = (props) => {
    useEffect(()=>{
        Aos.init({duration:3000});
      },[])
  return(
    <>
    <Menu/>
    <div className="forHeight"></div>
    <div className="mainDiv">
    <Card>
        <Card.Header data-aos="slide-down" className="cardHeader"><h1>Our Classes</h1></Card.Header>
        <Card.Body>
           <Row>
               <Col data-aos="slide-right" sm={12} md={6} className="mb-4">
                   <OurBatches 
                   className="English Grammar"
                   classTime="6:30am - 7:30am"
                   classStartDate="01/07/2021"
                   classDuration="Mon - Fri"
                   courseFees=" 500/month"
                   courseOverView="englishgrammer"
                    />
               </Col>
               <Col data-aos="slide-left" sm={12} md={6}>
               <OurBatches 
                   className="Spoken English"
                   classTime="7:40am - 8:40am"
                   classStartDate="01/07/2021"
                   classDuration="Mon - Fri"
                   courseFees=" 600/month"
                   courseOverView="spokenenglish"
                    />
               </Col>
           </Row>
        </Card.Body>      
    </Card>
        
        </div>

    </>
   )
  }


export default OurClasses