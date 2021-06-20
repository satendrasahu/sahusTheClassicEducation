import React from 'react'
import { Button, Table } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
/**
* @author
* @function OurBatches
**/

const OurBatches = (props) => {
  return(
    <>
    <>
        <h3 className="cardHeader p-3">{props.className}</h3>
        <>
        <Table responsive striped bordered hover borderless>
            
            <tbody>
                <tr></tr>
                <tr>
                    <th>Class Name</th>
                    <td>{props.className}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Time</th>
                    <td>{props.classTime}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Start Date</th>
                    <td>{props.classStartDate}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Duration/Week</th>
                    <td>{props.classDuration}</td>
                </tr>
                <tr></tr>
            
                <tr>
                    <th>Course Fees</th>
                    <td>&#8377; {props.courseFees}</td>
                </tr>
                <tr></tr>
            
            </tbody>
        </Table>
        <div className="d-flex justify-content-around">
        {/* <NavLink to="/admissionform">
        <Button variant="outline-primary" className="mr-1"size="lg">
                Join Now
            </Button>
        </NavLink>     */}
        <NavLink to={`/${props.courseOverView}`}>
        <Button variant="outline-primary" size="lg">
                See Course Overview
            </Button>
        </NavLink>    
           
           
</div>
      
        </>      
    </>
    </>
   )
  }


export default OurBatches

const DemoClassesCard = (props) => {
  return(
    <>
    <>
        <h3 className="cardHeader p-3">{props.className}</h3>
        <>
        <Table responsive striped bordered hover borderless>
            
            <tbody>
                <tr></tr>
                <tr>
                    <th>Class Name</th>
                    <td>{props.className}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Time</th>
                    <td>{props.classTime}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Start Date</th>
                    <td>{props.classStartDate}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class End Date</th>
                    <td>{props.classEndDate}</td>
                </tr>
                <tr></tr>
                <tr>
                    <th>Class Duration/Week</th>
                    <td>{props.classDuration}</td>
                </tr>
                <tr></tr>
            
                <tr>
                    <th>Course Fees</th>
                    <td>&#8377; {props.courseFees}</td>
                </tr>
                <tr></tr>
            
            </tbody>
        </Table>
        <div className="d-flex justify-content-around">
        {/* <NavLink to="/admissionform">
        <Button variant="outline-primary" className="mr-1"size="lg">
                Book Slot For Demo class
            </Button>
        </NavLink>     */}
           
           
           
</div>
      
        </>      
    </>
    </>
   )
  }


export {DemoClassesCard}