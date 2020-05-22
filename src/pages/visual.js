import React from "react";
import Navbar from '../components/navBar';
import "../components/layout.css";
import madden from "../images/madden.png"
import cod from "../images/cod.png"

const visual = () => {
    
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
            
            <div style={{paddingTop: '200px', textAlign: 'center'}}>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <div style={{flex: "0 100%"}}>
                        <h2 style={{color: "black", textAlign: 'center'}}>Visual Solutions</h2>
                        <p style={{marginTop: '10px', marginBottom: '50px'}}>
                            Visual accessibility issues in gaming can relate to those who have 
                            partial or total loss of sight. Color schemes make it difficult for
                            some players to see the games and small objects may not be visible. 
                            Types of visual impairments include low vision, blindness, and being 
                            color-blind. 
                        </p>
                    </div>
                    <div style={{flex: "0 100%"}}>
                        <h3 style={{color: "black", textAlign: 'center'}}>Current Solutions</h3>
                        <p style={{marginTop: '10px', marginBottom: '50px'}}>
                            Current solutions for players with visual accessibility issues include having 
                            customizable fonts and increasing important on audio cues. Having spatial sound 
                            in the game allows the player to understand the lay of the land easier. 
                            Being able to change the font and color themes allow players to better see 
                            figures and game aspects. 
                        </p>
                    </div>
                    <div style={{flex: "0 100%", textAlign: 'center'}}>
                        <h2 style={{color: "black"}}>Examples</h2>
                        <p style={{paddingTop: '10px', textAlign: 'left'}}>
                           Options like making icons, fonts, and other small items bigger
                        </p>
                        <img src={madden} alt={'menu with an option to toggle an option to increase icon sizes'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                            Madden 17’s has options to make icons bigger for players
                        </p>

                        <p style={{paddingTop: '10px', textAlign: 'left'}}>
                            Colorblind mode that alters GUI elements
                        </p>
                        <img src={cod} alt={'two images showing the GUI, left one has no color chnages, right one has changes to help colorblind people see'}/>
                        <p style={{marginBottom: "50px", fontSize: '16px', textAlign: 'center'}}>
                            Call of Duty: Advanced Warfare has added a full-on colorblind mode that 
                            not only filters colors on the mini map and HUD, but also colors 
                            throughout the map. The colorblind mode is on the right box surrounded 
                            by the red outline. 
                        </p>
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

export default visual