import React from "react";
import mockup from "../images/ds3mock.png";
import hud1 from "../images/ds3hud2.png";
import hud2 from "../images/ds3hud.png";
import {NavLink} from 'react-router-dom';
import cognitive from "../images/cognitive.png";
import auditory from "../images/auditory.png";
import motor from "../images/motor.png";
import visual from "../images/visual.png";

const Solution = () => {
    
    return (
        <div id="solutionSection" style={{width: "100%", backgroundColor: "#020A0F", paddingTop: "3rem", paddingBottom: "4rem"}}>
            <div>
                <h1 style={{color: "white",}}>The Solution</h1>
            </div>
            <div className='s-flex-container' style={{justifyContent: "space-between", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                        <div>
                            <h3>Cognitive</h3>
                            <img src={cognitive} alt="cognitive"></img>
                            <p>Alternative screen and game settings to address cognitive impairments.</p>
                            <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                <NavLink to="/cognitive" style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
                                    Learn More
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                        <div>
                            <h3>Motor</h3>
                            <img src={motor} alt="motor"></img>
                            <p>Resources to create modified controllers designed to help those with motor impairments.</p>
                            <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                <NavLink to="/motor" style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
                                    Learn More
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                        <div>
                            <h3>Auditory</h3>
                            <img src={auditory} alt="auditory"></img>
                            <p>Create options for audio settings that accommodate those with hearing issues.</p>
                            <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                <NavLink to="/auditory" style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
                                    Learn More
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <div  style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                        <div>
                            <h3>Visual</h3>
                            <img src={visual} alt="visual"></img>
                            <p> Optional changes in screen size, color contrast, and other visual settings.</p>
                            <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                <NavLink to="/visual" style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
                                    Learn More
                                </NavLink>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}

export default Solution