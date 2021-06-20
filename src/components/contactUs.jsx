import React, { useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import Menu from './Menu'
import Aos from "aos"


/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])
  const mystyle={
    background: 'linear-gradient(135deg,green, orange 60%, cyan)'
    // backgroundImage: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'
  }
  return(
    <>
    <Menu/>
    <div className="forHeight"></div>
    <Row >
      
      <Col sm={12} md={6}  className="">
        
        <Table responsive striped bordered hover borderless >
        <div data-aos="slide-right" className="addDiv text-white" style={mystyle}>
            <tbody>
                <tr></tr>
                <tr >
                    <th><h3 className="thh3">Institute Name</h3></th>
                    <td><h4 className="thh4">Sahu's The Classic Education</h4></td>
                </tr>
                <tr></tr>
                <tr >
                    <th><h3 className="thh3" >Director</h3></th>
                    <td><h4 className="thh4">Mr. Satendra Sahu</h4></td>
                </tr>
                <tr></tr>
                <tr >
                    <th><h3 className="thh3">Address</h3></th>
                    <td><h4 className="thh4">
                      Near Soni ka Kua Achharoni, Mahesh/rakesh sahu galla shop, kyara road</h4></td>
                </tr>
                <tr></tr>
                <tr >
                    <th><h3 className="thh3">Phone No</h3></th>
                    <td><h4 className="thh4">6265576366</h4></td>
                </tr>
                <tr >
                    <th><h3 className="thh3">Email</h3></th>
                    <td><h4 className="thh4">sahustheclassic@gmail.com</h4></td>
                </tr>
              
                </tbody>
                <marquee>
                <a href="https://bit.ly/386LKzS" className="aTag" style={{textDecoration:"none"}} target="_blank" rel="noreferrer"><h1>WhatsApp</h1></a>
                </marquee>
                </div>
                </Table>
               
      
      </Col>
      <Col sm={12} md={6}>
      <div data-aos="slide-left" className="mapDiv" >
       
      <Table responsive striped bordered hover borderless className="tab">
          
      
      <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4254375281166!2d78.2357658149582!3d25.019632283979124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3979e77928252e5f%3A0x104d8a967b1b1fba!2sMahesh%20%2F%20rakesh%20sahu%20galla%20shop!5e0!3m2!1sen!2sin!4v1623827783479!5m2!1sen!2sin" 
        title="formap"   width="750" height="600" allowfullscreen="" loading="lazy">
      </iframe>
            
            </Table>
            </div>
      </Col>
    </Row>
  
    </>
   )
  }


export default ContactUs