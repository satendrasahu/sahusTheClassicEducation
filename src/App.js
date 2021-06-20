import React from 'react'
import Home from './components/Home';
import {Switch,Route } from 'react-router-dom';


import './App.scss';
import Main from './components/Main';
import aboutUs from './components/aboutUs';
import EnglishGrammer from './components/EnglishGrammer';
import SpokenEnglish from './components/SpokenEnglish';
import ContactUs from './components/contactUs';
import OurClasses from './components/OurClasses';
import DemoClasses from './components/DemoClasses';
import Admission from './components/Admission';
import EnquiryForm from './components/EnquryForm';
import AdmissionForm from './components/admissionForm';
import Certificates from './components/Certificates';
/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <>
    
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/sahusTheClassicEducation" component={Home}/>
      <Route exact path="/main" component={Main}/>
      <Route exact path="/aboutus" component={aboutUs}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Route exact path="/certificates" component={Certificates}/>
      <Route exact path="/democlasses" component={DemoClasses}/>
      <Route exact path="/englishGrammer" component={EnglishGrammer}/>
      <Route exact path="/ourclasses" component={OurClasses}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Route exact path="/admission" component={Admission}/>
      <Route exact path="/enquiry" component={EnquiryForm}/>
      <Route exact path="/admissionform" component={AdmissionForm}/>
  
      <Route exact path="/spokenenglish" component={SpokenEnglish}/>
    </Switch>
    </>
   )
  }


export default App