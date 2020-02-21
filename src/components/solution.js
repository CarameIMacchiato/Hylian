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
            <div style={{display: "flex", flexDirection: "row",}}>
                <p style={{fontSize: "16pt", marginLeft: "5rem", color: "white"}}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborumh
                </p>
                <img style={{width: "50%", marginLeft: "3rem", marginRight: "5rem", flexShrink: "0"}} src={mockup} alt="dark souls 3 scenic"></img>
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "7rem", marginBottom: "7rem"}}>
                <img style={{width: "50%", marginLeft: "3rem", marginRight: "3rem", flexShrink: "0"}} src={hud1} alt="dark souls 3 flaming sword character"></img>
                <p style={{fontSize: "16pt", color: "white"}}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborumh
                </p>
            </div>
            <div style={{display: "flex", flexDirection: "row",}}>
                <p style={{fontSize: "16pt", color: "white", marginLeft: "5rem"}}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborumh
                </p>
                <img style={{width: "60%", marginLeft: "3rem", marginRight: "3rem", flexShrink: "0"}} src={hud2} alt="dark souls 3 dual sword character"></img>
            </div>
        </div>
        
    )
}

export default Solution