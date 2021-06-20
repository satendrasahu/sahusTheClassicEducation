import React, { useEffect } from 'react'
import {Button, Card,Table } from 'react-bootstrap'
import Menu from './Menu';
import Aos from "aos"
import Videos from './Videos';
import Certificates from './Certificates';

/**
* @author
* @function Admission
**/

const Admission = (props) => {
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
    <div className="mainDiv">
    <>
   
    
        <div data-aos="slide-right" className="contDiv" style={mystyle}>
    
        <Card.Header className="cardHeader"><h1> New Admission Open</h1></Card.Header>
        
          
           <div className="d-flex justify-content-around  mt-3">
           
           <Table responsive striped bordered hover borderless>
            
            <tbody>
                <tr></tr>
                <tr >
                    <th>
                        <p> Admission Open from 28/June/2021</p>
                    </th>
                    <td><Button variant="outline-primary" className="HomeButon text-white">Take Admission</Button></td>
                </tr>
                <tr></tr>
                <tr>
                    <th><p>Student Allow </p></th>
                    <td>  <p>10th-12th (10,11,12) & UG(BSC,BA or Any Student from graduation)  </p></td>
                </tr>
                </tbody>
                </Table>
           </div>
            
    
            <div className="text-center">
            <marquee><p>You Can Take Admission Through <span className="text-primary">WhatasApp or Call or Direct Institute</span> || 6265576366</p></marquee>
                <a href="https://bit.ly/386LKzS" className="aTag" style={{textDecoration:"none"}} target="_blank" rel="noreferrer"><h3>WhatsApp</h3></a>
            
            </div>
            <div>
             </div>

             <div className="details">
             <ul><h6>Provide Following Details when, you are doing WhatsApp </h6>
                <ol>Your Name</ol>
                <ol>Your Class</ol>
                <ol>Your Age</ol>
                <ol>Your School/College Nage</ol>
                <ol>Your Address</ol>
                <ol>Course Name</ol>
                <ol>Admission Date</ol>

            </ul>
             </div>
             
        </div>
     </>
    
        </div>
      <Videos/>
      
      <Certificates/>
    </>
   )
  }


export default Admission