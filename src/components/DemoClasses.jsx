import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Menu from './Menu'
import { DemoClassesCard } from './OurBatches'

import Aos from "aos";

/**
* @author
* @function DemoClasses
**/

const DemoClasses = (props) => {
    useEffect(()=>{
        Aos.init({duration:3000});
      },[])
  return(
    <>
        <Menu/>
        <div className="forHeight"></div>
        <div className="mainDiv">
    <Card data-aos="fade-down">
        <Card.Header className="cardHeader"><marquee><h1>Free 1st Demo Classes </h1></marquee></Card.Header>
        <Card.Body>
           <Row>
               <Col data-aos="slide-right" sm={12} md={6} className="mb-4">
                   <DemoClassesCard
                   className="English Grammar"
                   classTime="06:30am - 07:30am"
                   classStartDate="28/06/2021"
                   classEndDate="30/06/2021"
                   classDuration="Monday -Wednesday"
                   courseFees=" Free"
                    />
               </Col>
               <Col data-aos="slide-left" sm={12} md={6}>
               <DemoClassesCard
                   className="Spoken English"
                   classTime="07:40am - 08:40am"
                   classStartDate="28/06/2021"
                   classEndDate="30/06/2021"
                   classDuration="Monday -Wednesay"
                   courseFees="Free"
                    />
               </Col>
           </Row>
        </Card.Body>      
    </Card>
        
        </div>
      
      
    <div className="mainDiv">
    <Card data-aos="slide-up">
        <Card.Header className="cardHeader"><marquee><h1>Free 2nd Demo Classes </h1></marquee></Card.Header>
        <Card.Body>
           <Row>
               <Col data-aos="slide-right"sm={12} md={6} className="mb-4">
                   <DemoClassesCard
                   className="English Grammar"
                   classTime="06:30am - 07:30am"
                   classStartDate="01/07/2021"
                   classEndDate="03/07/2021"
                   classDuration="Thursday- Saturday"
                   courseFees=" Free"
                    />
               </Col>
               <Col data-aos="slide-left" sm={12} md={6}>
               <DemoClassesCard
                   className="Spoken English"
                   classTime="07:40am - 08:40am"
                   classStartDate="01/07/2021"
                   classEndDate="03/07/06/2021"
                   classDuration="Thursday- Saturday"
                   courseFees="Free"
                    />
               </Col>
           </Row>
        </Card.Body>      
    </Card>
        
        </div>
      
    
    </>
   )
  }


export default DemoClasses