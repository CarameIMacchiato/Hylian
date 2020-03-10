import React from "react";
import mockup from "../images/ds3mock.png";
import hud1 from "../images/ds3hud2.png";
import hud2 from "../images/ds3hud.png";

const Solution = () => {
    
    return (
        <div id="solutionSection" style={{width: "100%", backgroundColor: "#020A0F", paddingTop: "3rem", paddingBottom: "4rem"}}>
            <div>
                <h1 style={{color: "white",}}>The Solution</h1>
            </div>
            <div className='s-flex-container'>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div>
                        <h2>Colorblind Options</h2>
                        <p style={{fontSize: "16pt", color: "white"}}>
                            For players with colorblindness, it can be difficult to see or differentiate in-game objects. 
                            To solve this, we have created a colorblind mode that should allow players to more easily 
                            distinguish in-game objects.
                        </p>
                    </div>
                    <img style={{width: "50%", flexShrink: "0", marginLeft: '3rem'}} src={mockup} alt="mockup showing new colorblind colors"></img>
                </div>
                <div style={{display: "flex", flexDirection: "row",}}>
                    <img style={{width: "50%", flexShrink: "0", marginRight: '3rem'}} src={hud1} alt="mockup comparing old hud size to bigger hud size"></img>
                    <div >
                        <h2 style={{textAlign: 'right'}}>Increased HUD Size</h2>
                        <p style={{fontSize: "16pt", color: "white", textAlign: 'right'}}>
                            HUD elements on screen, also known as the Heads Up Display, 
                            tells players important elements about the game. Sometimes, they can 
                            be hard to see or read, so we created a toggle for increasing the 
                            size of those elements.  
                        </p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row",}}>
                    <div>
                        <h2>Increased Contrast</h2>
                        <p style={{fontSize: "16pt", color: "white"}}>
                            To solve visual impairments that make it difficult for 
                            players to see game objects, there will be an option to 
                            increase the contrast of the game’s visuals.  
                        </p>
                    </div>
                    <img style={{width: "60%", flexShrink: "0", marginLeft: '3rem'}} src={hud2} alt="increased contrast comparison mockup"></img>
                </div>
                <div class='features'>
                    <div>
                        <h2 style={{textAlign: 'center'}}>More Features Coming Soon...</h2>
                        <p style={{textAlign: 'center', color: 'white'}}>
                            We will add more features to help with other impairments as development continues.
                            <ul>
                                <li style={{listStyle: 'none'}}>Difficulty Modes</li>
                                <li style={{listStyle: 'none'}}>Larger Fonts Options</li>
                                <li style={{listStyle: 'none'}}>Slow Motion Mode</li>
                                <li style={{listStyle: 'none'}}>Haptic and Noise Feedback</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Solution