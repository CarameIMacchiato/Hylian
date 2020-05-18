import React from "react";
import Navbar from '../components/navBar';
import AdavptiveController from '../images/adaptiveController.jpg';
import quadstick from '../images/quadstick.png'
import {Link} from 'gatsby';


const motor = () => {
    
    return (
        <div>
            <Navbar/> 

            <div className='mini-nav'>
                <ul>
                    <li><Link to='cognitive'>Cognitive</Link></li>
                    <li><Link to='motor'>Motor</Link></li>
                    <li><Link to='auditory'>Auditory</Link></li>
                    <li><Link to='visual'>Visual</Link></li>
                </ul>
            </div>
            
            <div className='mini-nav'>
                <ul>
                    <li><a href='/cognitive'>Cognitive</a></li>
                    <li><a href='/motor'>Motor</a></li>
                    <li><a href='/auditory'>Auditory</a></li>
                    <li><a href='/visual'>Visual</a></li>
                </ul>
            </div>

            <div style={{paddingTop: '200px', backgroundColor: "white", textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Current Solutions to Motor Problems</h2>
                        <p style={{marginTop: '10px', marginBottom: '50px'}}>
                           Solutions to motor problems mainly involve creating physical devices and controllers that 
                           have special capabilities or modifications. These physical devices work to simplify controllers
                           for those who have difficulties with normal controllers. Other solutions work to slow down the 
                           pace of a game and rely less on reaction times and quick reflexes. This can inlude things like 
                           difficulty levels and game speed. 
                        </p>
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "black"}}>Examples</h2>
                        <h4 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>
                            Microsoft's Adaptive Controller
                        </h4>
                        <img src={AdavptiveController} alt={'menu with an option to toggle tutorials'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                            Microsoft has created has created a controller designed for those with limited mobilit. It supports 
                            a range of different inputs in order to customize the device and create the optimal gaming experience
                            for its users.
                        </p> 
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h4 style={{paddingTop: '10px', textAlign: 'left', color: 'black'}}>
                            Quadstick FPS Game Controller
                        </h4>
                        <img src={quadstick} alt={'menu with an option to toggle tutorials'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                           A mouth operated joystick with multiple sip and puff sensors, a lip position sensor, and a push switch,
                           connected to a 32 bit ARM processor that converts sensor inputs into USB and Bluetooth signals.
                        </p> 
                    </div>
                    <div style={{flex: "0 100%", marginBottom: '50px'}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Proposed Solutions</h2>
                        <p style={{paddingTop: '20px'}}>
                            Although default controls can try to specify how designers want their audience to play a game, not all 
                            users are capable or are comfortable with a  predefined set of controls. One way to help games be more 
                            accessible is to allow customization of controls and remapping of buttons.
                        </p>
                        <div style={{position:'relative', paddingBottom:'calc(56.25% + 44px)'}}>
                            <iframe src='https://gfycat.com/ifr/PresentRawCrustacean' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="footer">
                Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School
                <p>We are going open source on May 31st! For inquiries contact us at <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p> 
            </footer>
        </div>
    )
}

export default motor