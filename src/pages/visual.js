import React from "react";
import Navbar from '../components/navBar';
import "../components/layout.css";
import questhint from '../images/questhintmarker.png'
import gong from '../images/gong.mp4'
import glow from '../images/promGlow.png'
import madden from '../images/madden.png'
import cod from '../images/cod.png'

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
            <div style={{flex: "0 100%", marginBottom: '50px', color: 'black'}}>
                <h2 style={{color: "black", textAlign: 'center'}}>Proposed Solutions</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '1rem'}}>
                        <h3 style={{color: "black", textAlign: 'center'}}>Compass Mapping of Enemies</h3>
                        <img src={questhint} alt='quest hint marker' style={{width: '500px'}}></img>
                    </div>
                    <p style={{width: '20%', marginTop: '4rem'}}>
                        With low vision, it can be harder for gamers playing action intensive games to respond quicker. A way to 
                        help solve that problem is to add a glow around the enemies to alert the gamer or to add a compass to point where 
                        enemies may be near you. An example on the left is the compass feature in Call of Duty surrounded by a black circle 
                        on the top left.
                    </p>
                </div>
            </div>
            <div>
                <h2 style={{color: "black", textAlign: 'center', marginTop: '3rem'}}>Further Solutions</h2>
                <div style={{width: "50%", margin: "0 auto"}}>
                    <h3 style={{color: "black", textAlign: 'center'}}>Spatial Sound and Audio Cues</h3>
                    <p style={{color: "black", textAlign: 'left'}}>
                        Games like Bloodborne are littered with audio cues that can help the player notice when they might be close to a 
                        dangerous area and should be aware. An audio cue, like the bell, can alert the player they may be in danger nearby, and 
                        can help them be aware of their surroundings when moving on to the next area. 
                    </p>
                    <audio controls style={{marginLeft: '30%', marginRight: '30%', width: '40%'}}>
                        <source src={gong} type="audio/mpeg"></source>
                    </audio>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', margin: '3rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', margin: '1rem'}}>
                        <h3 style={{color: "black", textAlign: 'center'}}>Adding Prominent Glow</h3>
                        <img src={glow} alt='quest hint marker' style={{width: '300px'}}></img>
                    </div>
                    <p style={{width: '20%', marginTop: '1rem', marginLeft: '3rem'}}>
                        Adding a prominent glow around or on the enemy can alert the player whether or not an enemy will attack or where they 
                        might be. This can help players with visual issues to focus on where to attack. In GTFO, Enemies will glow red and start 
                        to look around in their scanning stage. When the enemy starts pulsing with a red glow, the player will be able to hear the 
                        enemies heartbeat and this will alert the player to be ready for an attack, since the enemy knows you are nearby.An in game 
                        example is shown on the left.
                    </p>
                </div>
                <div  style={{width: "50%", margin: "0 auto"}}> 
                    <h3 style={{color: 'black'}}>Sources</h3>
                    <ol className="source-list" style={{textAlign: 'left'}}>
                        <li>https://www.gamasutra.com/view/feature/2342/improving_game_accessibility.php?print=1</li>
                        <li>https://dl.acm.org/doi/pdf/10.1145/3342428.3342682</li>
                        <li> Garber, Lee. "Game accessibility: enabling everyone to play." Computer 6 (2013): 14-18.</li>
                    </ol>
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