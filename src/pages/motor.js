import React from "react";
import Navbar from '../components/navBar';
import AdavptiveController from '../images/adaptiveController.jpg';
import quadstick from '../images/quadstick.png'
import "../components/layout.css";


const motor = () => {
    
    return (
        <div>
            <Navbar/> 

            <div className='mini-nav'>
                <ul>
                    <li><a href='/Hylian/cognitivep'>Cognitive</a></li>
                    <li><a href='/Hylian/motor'>Motor</a></li>
                    <li><a href='/Hylian/auditory'>Auditory</a></li>
                    <li><a href='/Hylian/visual'>Visual</a></li>
                </ul>
            </div>

            <div style={{paddingTop: '200px', backgroundColor: "white", textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Current Solutions to Motor Problems</h2>
                        <p style={{marginTop: '10px', marginBottom: '50px', textAlign: 'left'}}>
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
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'left'}}>
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
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'left'}}>
                           A mouth operated joystick with multiple sip and puff sensors, a lip position sensor, and a push switch,
                           connected to a 32 bit ARM processor that converts sensor inputs into USB and Bluetooth signals.
                        </p> 
                    </div>
                    <div style={{flex: "0 100%", marginBottom: '50px', color: 'black'}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Proposed Solutions</h2>
                        <div>
                            <h3 style={{color: "black", textAlign: 'center', paddingTop: '30px'}}>Customizable Controls</h3>
                            <p style={{paddingTop: '10px', textAlign: 'left'}}>
                                Although default controls can try to specify how designers want their audience to play a game, not all 
                                users are capable or are comfortable with a  predefined set of controls. One way to help games be more 
                                accessible is to allow customization of controls and remapping of buttons.
                            </p>
                            <div style={{position:'relative', paddingBottom:'1rem'}}>
                                <iframe src='https://gfycat.com/ifr/PresentRawCrustacean' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>
                            </div>
                            <h4 style={{textAlign: 'left'}}>How To Implement</h4>
                            <p style={{textAlign: 'left', textAlignLast: 'left'}}>
                                When creating the controls for a game, it is necesssary to create a menu where players can remap and alter the game inputs.
                                Ideally this would be a section in the settings menu in every game, giving players control options and customizability.
                            </p>
                        </div>
                        <div>
                        <h3 style={{color: "black", textAlign: 'center', paddingTop: '30px'}}>Variable Aim Assist</h3>
                            <p style={{paddingTop: '10px', textAlign: 'left'}}>
                                While aim assist is considered cheating in multiplayer player vs. player games, it can be a strong accessibility tool in
                                single player or co-op first person shooter games. It helps simplify game combat by locking on to enemies and tracking their
                                movement. This can lower the reaction time needed to defeat enemies and decrease difficulty considerably.
                            </p>
                            <div style={{position:'relative', paddingBottom:'1rem'}}>
                                <iframe src='https://gfycat.com/ifr/ElectricBlueAsianelephant' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>
                            </div>
                            <h4 style={{textAlign: 'left'}}>How To Implement</h4>
                            <h4>Pseudocode Example</h4>
                            <a href={'https://forum.unity.com/threads/solved-aim-assist-code.49720/'}>Unity Forums</a>
                            <div>
                                <iframe src='https://codepen.io/alwong34/embed/oNjJRMB?default-tab=js&amp' style={{height: '300px', width: '70%'}}></iframe>
                            </div>
                            <p style={{textAlign: 'left'}}>
                                One simplified version of an aim assist is to lower mouse sensitivity when the user's crosshairs pass over an enemy. In the code snippet
                                above, we check to see if the crosshairs collide with an object to shoot, and if it does we reduce the aim sensitivity. This gives the 
                                feeling that the crosshairs are locked-on to the target.
                            </p>
                        </div>
                        <div>
                            <h3 style={{color: 'black'}}>Sources</h3>
                            <ol className="source-list" style={{textAlign: 'left'}}>
                                <li>https://www.game-accessibility.com/documentation/gaming-with-a-physical-disability/</li>
                                <li>https://accessible.games/</li>
                                <li>https://forum.unity.com/threads/solved-aim-assist-code.49720/</li>
                                <li>https://www.xbox.com/en-US/accessories/controllers/xbox-adaptive-controller</li>
                                <li>https://www.quadstick.com/shop/quadstick-fps-game-controller</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School
                <p>We are going open source on May 31st! For inquiries contact us at <a href="emailto:kaw29@uw.edu" >kaw29@uw.edu</a></p> 
            </footer>
        </div>
    )
}

export default motor