import React from "react";
import {Link} from 'gatsby';
import cognitive from "../images/cognitive.png";
import auditory from "../images/auditory.png";
import motor from "../images/motor.png";
import visual from "../images/visual.png";

const Solution = () => {
    
    return (
        <div>
            <div className="skewed-left"></div>
            <div id="solutionSection" style={{width: "100%", backgroundColor: "white", paddingTop: "3rem", paddingBottom: "4rem"}}>
                <div>
                    <h1 style={{color: "black",}}>The Solution</h1>
                </div>
                <div className='s-flex-container' style={{justifyContent: "space-between", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                            <div>
                                <h3>Cognitive</h3>
                                <img src={cognitive} alt="cognitive"></img>
                                <p>Alternative screen and game settings to address cognitive impairments.</p>
                                <Link to="cognitive" style={{color: 'black', textDecoration: `none`, cursor: "pointer"}}>
                                    <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                            <div>
                                <h3>Motor</h3>
                                <img src={motor} alt="motor"></img>
                                <p>Resources to create modified controllers designed to help those with motor impairments.</p>
                                <Link to="motor" style={{color: 'black', textDecoration: `none`, cursor: "pointer"}}>
                                    <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                            <div>
                                <h3>Auditory</h3>
                                <img src={auditory} alt="auditory"></img>
                                <p>Create options for audio settings that accommodate those with hearing issues.</p>
                                <Link to="auditory" style={{color: 'black', textDecoration: `none`, cursor: "pointer"}}>
                                    <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div  style={{display: "flex", flexDirection: "column", width: "25%", textAlign: "center", padding: "10px"}}>
                            <div>
                                <h3>Visual</h3>
                                <img src={visual} alt="visual"></img>
                                <p> Optional changes in screen size, color contrast, and other visual settings.</p>
                                <Link to="visual" style={{color: 'black', textDecoration: `none`, cursor: "pointer"}}>
                                    <button style={{width: "120px", height: "50px", fontSize: "12pt"}}>
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Solution