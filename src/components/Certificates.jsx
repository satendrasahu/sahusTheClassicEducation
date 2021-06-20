import React, { useEffect } from 'react'
import Menu from './Menu'
import Aos from "aos"
import { Col, Row } from 'react-bootstrap'

/**
* @author
* @function Certificates
**/

const Certificates = (props) => {
    useEffect(()=>{
        Aos.init({duration:3000});
      },[])
   
  return(
    <>
    <Menu/>
    <div className="forHeight"></div>

    <div data-aos="slide-up" className="certificateDiv">
        <Row>
            <Col data-aos="slide-right" sm={12} md={6}>
            <img className="cetiImg" src={process.env.PUBLIC_URL+"/spokenEnglish.jpg"} alt=""/>
                
            </Col>
            <Col data-aos="slide-left" sm={12} md={6}>
            <img className="cetiImg" src={process.env.PUBLIC_URL+"/EnglishGrammar.jpg"} alt=""/>
                
            </Col>

        </Row>
    
    </div>    
    </>
   )
  }


export default Certificates