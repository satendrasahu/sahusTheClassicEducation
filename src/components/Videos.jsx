import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import VideoApi from './VideoApi';
import Aos from "aos"

/**
* @author
* @function Videos
**/

const Videos = (props) => {
    useEffect(()=>{
        Aos.init({duration:3000});
      },[])
    
    return(
    <>
        {
            VideoApi.map((data, index)=>{
                return(
                    <Card data-aos="slide-up" className="videoDiv d-flex align-items-center">
                         <ReactPlayer
                            className='react-player'
                            controls={true}
                            key={index}
                            url={data.url}
                            width='100%'
                            height='100%'
                        />
                    </Card>
               )
            })
        }
         
    </>
   )
  }


export default Videos