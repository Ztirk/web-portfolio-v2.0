import React from 'react';
import './Works.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Works = () => {
  return (
    <div className='second-section' id='works'>
        <div>Here's some of my works</div>
        <div className='frame'>
           <div className='slide'>
               <Slide>
                    <div className='link-container'>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                    </div>
                    <div className='link-container'>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                        <div>
                            <img src='images/download.png'></img>
                            <div>eiei project</div>
                        </div>
                    </div>
                </Slide>
           </div>
        </div>
    </div>
  )
}

export default Works