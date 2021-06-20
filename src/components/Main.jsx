import React from 'react'
import Admission from './Admission'
import DemoClasses from './DemoClasses'
import Menu from './Menu'
import OurClasses from './OurClasses'

/**
* @author
* @function Main
**/

const Main = (props) => {
  return(
    <>
    <Menu/>
    <div className="forHeight"></div>
    <OurClasses/>  
    <DemoClasses/>
    <Admission/>
    </>
   )
  }


export default Main